import { transparentize } from 'polished';
import styled from 'styled-components';
import { palette, size, key } from 'styled-theme';

import { IconButton } from 'components/IconButton';

import { media } from 'helpers/styleHelper';


export const StyledAlertWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1001;
  left: 50%;
  transform: translateX(-50%);
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  width: 100vw;
  height: ${size('headerHeight', '70px')};
  background-color: transparent;
  background-repeat: no-repeat;
  background-image: ${({ theme }) =>
    `linear-gradient(180deg, ${transparentize(
      0.8,
      '#23DCC8',
    )} 0%, ${transparentize(1, theme.palette.background[0])} 100%)`};

  padding: 0 10px;
  ${media.sm`
    padding: 0 20px;
  `}

  > *:last-child {
    margin-right: 0;
  }
  /* HACK: this override hack should be in the 
  dropdown component itself */
  .ant-dropdown-link {
    display: flex;
    align-items: center;
    color: ${palette('text', 0)};
    font-weight: bold;
  }

  .header-tab-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .ant-tabs-nav {
      padding: 0 10px;
      ${media.sm`
        padding: 0 25px;
      `}
    }

    .ant-tabs-tab {
      padding-right: 5px;
      ${media.sm`
        padding-left: 16px;
        padding-right: 16px;
      `}
    }
  }
`;

export const HeaderCenterWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 8px 10px;
  border: 1px solid ${palette('gray', 0)};
  border-radius: 4px;

  .label-wrapper {
    padding: 0;
  }
`;

export const HeaderTools = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  .ant-dropdown-link {
    .anticon-down {
      margin-left: 8px;
    }
  }
`;

export const HeaderLeftActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: none;
  height: 24px;
  margin-right: 4px;

  svg {
    width: 180px;
    height: 24px;
  }

  ${media.md`
    margin-right: 20px;
    display: flex;
  `}
`;

export const HeaderTitle = styled.p`
  display: none;
  ${media.sm`
    display:block;
  `}
  color: ${palette('text', 0)};
  font-size: ${key('sizes.font.big', '15px')};
  letter-spacing: 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const HeaderActionButtons = styled.div`
  display: flex;
  align-items: center;
  ${media.sm`
    padding-right: 10px;
  `}

  /* HACK: This should be refactored in 
     the future to not use classes */

  .wallet-btn-wrapper {
    display: none !important;
    ${media.sm`
      display: flex !important;
      margin-right: 4px;
    `}
  }

  a {
    .wallet-mobile-btn {
      margin-right: 8px;
      width: 30px;
      height: 30px;
      min-width: 30px;
      border-radius: 50%;
      border: 1px solid ${palette('primary', 0)};
      padding: 4px 7px;
      color: ${palette('primary', 0)};
      ${media.sm`
        display: none;
      `}
    }
  }

  .txView-wrapper {
    display: none;
    ${media.sm`
      display: block;
    `}
    margin-left: 10px;
    align-items: center;
  }

  .ant-dropdown-link {
    margin: 0 4px;
    display: none;

    &.baseprice-selector {
      display: flex;

      .currency-icon-container {
        display: none;
        ${media.sm`
          display: block;
        `}

        svg {
          width: 20px;
          height: 20px;
          margin-top: 6px;
          margin-right: 4px;
        }
      }
    }

    ${media.sm`
      display: flex;
    `}

    .label-wrapper {
      width: 42px;
      text-align: center;
      text-transform: uppercase;
    }

    .anticon-down {
      margin-left: 8px;
    }
  }
`;

export const ConnectionMenuItem = styled.div`
  .connection-server-label {
    padding-left: 10px;
    font-weight: bold;
  }
  .connection-server-url {
    padding-left: 10px;
    color: ${palette('text', 2)};
    text-transform: lowercase;
  }
`;

export const TxIconButton = styled(IconButton)`
  margin: 0 4px;
`;
