import { useCallback, useMemo } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import * as midgardActions from 'redux/midgard/actions';
import { State } from 'redux/midgard/types';
import { getAssetFromString } from 'redux/midgard/utils';
import { RootState } from 'redux/store';

import { RUNE_SYMBOL } from 'settings/assetData';

import { PoolDetailStatusEnum } from 'types/generated/midgard';

const useMidgard = () => {
  const dispatch = useDispatch();

  const midgardState: State = useSelector(
    (state: RootState) => state.Midgard,
  );

  const { poolData, pools } = midgardState;

  // get all enabled pool assets
  const enabledPools: string[] = useMemo(
    () =>
      Object.keys(poolData).reduce(
        (result: string[], tokenName: string) => {
          const tokenData = poolData[tokenName];

          if (tokenData?.status === PoolDetailStatusEnum.Enabled) {
            const asset = getAssetFromString(tokenData?.asset)?.symbol ?? '';
            result.push(asset);
          }
          return result;
        },
        [RUNE_SYMBOL],
      ),
    [poolData],
  );

  const isValidPool = useCallback((pool: string) => {
    const poolSymbol = getAssetFromString(pool)?.symbol;

    return poolSymbol && enabledPools.includes(poolSymbol.toUpperCase());
  }, [enabledPools]);

  const isPoolExists = useCallback((pool: string) => {
    const poolSymbol = getAssetFromString(pool)?.symbol;

    return poolSymbol && pools.includes(`BNB.${poolSymbol.toUpperCase()}`);
  }, [pools]);


  const getPoolAddress = useCallback(() => {
    dispatch(midgardActions.getPoolAddress());
  }, [dispatch]);

  return {
    midgardActions,
    ...midgardState,
    enabledPools,
    isValidPool,
    isPoolExists,
    getPoolAddress,
  };
};

export default useMidgard;
