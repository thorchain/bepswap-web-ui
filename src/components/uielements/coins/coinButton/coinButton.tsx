import React from 'react';

import { formatBN, bn } from '@thorchain/asgardex-util';
import BigNumber from 'bignumber.js';

import Label from '../../label';
import CoinIcon from '../coinIcon';
import { CoinButtonWrapper } from './coinButton.style';

type Props = {
  cointype: string;
  price?: BigNumber;
  priceUnit?: string;
  reversed?: boolean;
  focused?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

const CoinButton: React.FC<Props> = (props: Props): JSX.Element => {
  const {
    cointype,
    price = bn(0),
    priceUnit = 'RUNE',
    reversed = false,
    className = '',
    focused = false,
    disabled = false,
    onClick = () => {},
    ...otherProps
  } = props;
  const priceValue = formatBN(price);
  const priceLabel = `${priceUnit.toUpperCase()} ${priceValue}`;

  return (
    <CoinButtonWrapper
      className={`coinButton-wrapper ${className}`}
      onClick={onClick}
      focused={focused}
      reversed={reversed}
      disabled={disabled}
      {...otherProps}
    >
      <div className="coinButton-content">
        <CoinIcon type={cointype} />
        <div className="coin-value">
          <Label size="big" weight="bold">
            {cointype}
          </Label>
          <Label color="input">{priceLabel}</Label>
        </div>
      </div>
    </CoinButtonWrapper>
  );
};

export default CoinButton;
