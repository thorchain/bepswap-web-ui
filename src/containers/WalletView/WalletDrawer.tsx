import React, { useState, useCallback } from 'react';

import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { WalletOutlined, SyncOutlined } from '@ant-design/icons';
import { delay } from '@thorchain/asgardex-util';
import copy from 'copy-to-clipboard';


import { RootState } from 'redux/store';
import * as walletActions from 'redux/wallet/actions';
import { User } from 'redux/wallet/types';

import { Maybe } from 'types/bepswap';

import Button from '../../components/uielements/button';
import Label from '../../components/uielements/label';
import showNotification from '../../components/uielements/notification';
import WalletButton from '../../components/uielements/walletButton';
import { WalletDrawerWrapper, Drawer } from './WalletDrawer.style';
import WalletView from './WalletView';

type Props = {
  user: Maybe<User>;
  forgetWallet: typeof walletActions.forgetWallet;
  refreshBalance: typeof walletActions.refreshBalance;
  refreshStakes: typeof walletActions.refreshStakes;
};

const WalletDrawer: React.FC<Props> = props => {
  const [visible, setVisible] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const history = useHistory();

  const { user, refreshBalance, refreshStakes } = props;
  const wallet = user ? user.wallet : null;

  const toggleDrawer = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  const onClose = () => {
    setVisible(false);
  };

  const onCopyWallet = useCallback(() => {
    if (wallet) {
      copy(wallet);
      showNotification({
        type: 'open',
        message: 'Address Copy successful!',
      });
    }
  }, [wallet]);

  const onClickRefresh = useCallback(async () => {
    if (wallet) {
      refreshBalance(wallet);
      refreshStakes(wallet);
    }

    setRefresh(true);
    await delay(1000);
    setRefresh(false);
  }, [refreshBalance, refreshStakes, wallet]);

  const handleGotoTransaction = () => {
    onClose();
    history.push('/tx');
  };

  const status = wallet ? 'connected' : 'disconnected';

  return (
    <WalletDrawerWrapper>
      <WalletButton
        connected
        address={wallet}
        onClick={toggleDrawer}
      />
      <div className="wallet-mobile-btn" onClick={toggleDrawer}>
        <WalletOutlined />
      </div>
      <Drawer
        placement="right"
        closable={false}
        width={350}
        onClose={onClose}
        visible={visible}
      >
        <div className="refresh-balance-icon" onClick={onClickRefresh}>
          <SyncOutlined spin={refresh} />
        </div>
        <WalletView status={status} onClose={onClose} />
        <div className="wallet-drawer-tools">
          <Button
            className="forget-btn"
            data-test="wallet-forget-button"
            typevalue="outline"
            color="warning"
            onClick={props.forgetWallet}
          >
            FORGET
          </Button>
          <Button
            className="transaction-btn"
            data-test="wallet-transaction-button"
            typevalue="outline"
            color="primary"
            onClick={handleGotoTransaction}
          >
            transactions
          </Button>
        </div>
        {wallet && (
          <div className="wallet-address">
            <Label className="wallet-label-wrapper">{wallet}</Label>
            <div
              className="copy-btn-wrapper"
              onClick={wallet ? onCopyWallet : undefined}
            >
              COPY
            </div>
          </div>
        )}
      </Drawer>
    </WalletDrawerWrapper>
  );
};

export default connect(
  (state: RootState) => ({
    user: state.Wallet.user,
  }),
  {
    refreshBalance: walletActions.refreshBalance,
    refreshStakes: walletActions.refreshStakes,
    forgetWallet: walletActions.forgetWallet,
  },
)(WalletDrawer);
