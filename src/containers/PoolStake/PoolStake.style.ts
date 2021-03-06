import Paragraph from 'antd/lib/typography/Paragraph';
import styled from 'styled-components';
import { palette, key } from 'styled-theme';

import UnstyledTabs from 'components/uielements/tabs';
import ContentView from 'components/utility/contentView';

import { media } from 'helpers/styleHelper';

// TODO:
// This needs to be refactored/rewritten pretty badly
// We really must not use global classes for CSS we loose
// all the reuseability/modularity that CSS provides us

// TODO(Chris): Refactor all styles using styled-components, not inline styles

export const ContentWrapper = styled(ContentView)`
  padding: 0;
  border: 1px solid ${palette('gray', 0)};
  border-radius: 14px;

  max-width: 560px;
  margin: auto;

  .stake-info-view {
    .token-info-card {
      padding: 8px 8px 8px 0;

      &:last-child {
        padding-right: 0px;
      }
    }
  }

  .stake-status-view {
    ${media.lg`
      padding: 20px 0;
      border-bottom: 1px solid ${palette('gray', 0)};
    `}

    .stake-pool-col {
      display: flex;
      padding: 0px 20px;
      justify-content: center;
      align-items: center;
      ${media.lg`
        justify-content: center;
      `}

      .pool-status-info {
        display: flex;
        flex-direction: column;
        ${media.lg`
          padding: 0 15px;
        `}

        .stake-pool-status {
          width: 150px;
          text-transform: uppercase;
          padding-bottom: 4px;
          .status-value {
            ${media.lg`
              font-weight: bold;
              font-size: ${key('sizes.font.big', '10px')};
            `}
          }
        }

        .pool-price-label {
          padding-top: 4px;
        }
      }
    }

    .stake-info-col {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      padding: 20px 20px 0 20px;
      .stake-info-status {
        width: 50%;
        ${media.lg`
          width: 25%;
        `}
      }
    }
  }

  .advanced-mode-btn {
    position: absolute;
    top: 75px;
    right: 20px;
    height: 20px;
    z-index: 100;
    ${media.sm`
      top: 15px;
      right: 50px;
    `}
  }

  .your-share-view,
  .share-detail-view {
    .label-title {
      ${media.lg`
          padding-bottom: 0;
          letter-spacing: 2.5px;
        `}
    }
    .go-back {
      ${media.lg`
          display: flex;
          align-items: center;
          text-transform: uppercase;
          letter-spacing: 2.5px;
        `}

      svg {
        ${media.lg`
            padding-right: 8px;
            font-size: 16px;
          `}
      }
    }

    .withdraw-percent-view {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 5px;
      ${media.lg`
          .label-wrapper {
            width: 40px;
          }
        `}
    }

    .stake-withdraw-info-wrapper {
      ${media.lg`
          display: flex;
          flex-direction: column;
        `}

      .withdraw-status-wrapper {
        ${media.lg`
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}

        .withdraw-asset-wrapper {
          ${media.lg`
              display: flex;
              flex-direction: column;
            `}

          .coinData-wrapper {
            padding: 10px 0;
          }
        }
      }
      .drag-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 20px;

        .cooldown-info {
          display: flex;
          align-items: center;
          margin-top: 8px;
          .label-wrapper {
            margin-right: 4px;
          }
        }
      }
    }
  }

  .your-share-view {
    ${media.lg`
        display: flex;
        flex-direction: column;
      `}

    .advanced-mode-btn {
      ${media.lg`
          width: 125px;
          margin-top: 10px;
        `}
    }

    .right-arrow-wrapper {
      ${media.lg`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-grow: 1;
          padding-top: 30px;
        `}
    }

    .your-share-wrapper {
      padding: 4px 10px;

      ${media.lg`
        display: flex;
        flex-direction: column;
        justify-content: center;
      `}

      .label-title {
        font-size: 15px;
        text-align: center;
        font-weight: 500;
        letter-spacing: 0.04em;
      }

      .label-wrapper {
        text-transform: uppercase;
      }

      .earning-label {
        margin-top: 40px;
      }

      .share-placeholder-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100%;
      }

      .placeholder-label {
        font-size: 14px;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      .placeholder-icon {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100px;
        height: 100px;
        margin-bottom: 20px;
        border-radius: 50%;
        background: ${palette('background', 1)};
        svg {
          width: 60px;
          height: 60px;
          path {
            fill: ${palette('gray', 1)};
          }
        }
      }

      .share-info-title {
        padding: 20px 0;
        text-align: center;
        text-transform: uppercase;

        border: 1px solid ${palette('gray', 0)};
        border-bottom: 3px solid ${palette('primary', 0)};
      }

      .your-share-info-wrapper {
        display: flex;
        flex-direction: column;
        padding-bottom: 5px;

        border: 1px solid ${palette('gray', 0)};
        border-top: none;

        .share-info-row {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 10px;
          border-top: 1px solid ${palette('gray', 0)};
        }

        .your-share-info {
          & > div {
            text-align: center;
          }

          .status-title,
          .status-value {
            ${media.lg`
                padding: 3px 0;
              `}
          }

          .status-value {
            font-size: 20px;
          }
          .your-share-price-label {
            color: ${palette('text', 2)};
            ${media.lg`
                padding: 0;
              `}
          }
        }
      }
    }

    .withdraw-view-wrapper {
      ${media.lg`
          display: flex;
          flex-direction: column;
          border-top: 1px solid ${palette('gray', 0)};
          padding-right: 20px;
          padding-bottom: 10px;
          padding-left: 20px;
        `}
    }
  }

  .share-detail-view {
    padding: 0;

    .wallet-btn-wrapper {
      margin: 20px;
    }
    .label-no-padding {
      ${media.lg`
          padding: 0;
        `}
    }
    .label-description {
      ${media.lg`
          padding-bottom: 0;
        `}
    }

    .stake-card-wrapper {
      display: flex;
      flex-direction: column;
      padding: 0px 10px;

      ${media.md`
        padding: 0px 40px;
      `}

      ${media.lg`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        padding: 15px 0;
        & > * {
          margin-bottom: auto;
        }
      `}

      .coin-card-wrapper {
        padding: 6px 0;
      }
    }

    .slider-wrapper {
      ${media.lg`
          width: 100%;
        `}
    }

    .stake-share-info-wrapper {
      ${media.lg`
          display: flex;
          flex-direction: column;
          width: 100%;
        `}

      .info-status-wrapper {
        flex-wrap: wrap;
      }

      .status-wrapper {
        ${media.lg`
            width: 110px !important;
            margin-right: 30px;
          `}

        .label-wrapper {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .pool-status-wrapper {
        display: flex;
        > * {
          width: 50%;
        }

        ${media.lg`
            align-items: center;
            > * {
              width: auto;
            }
          `}
      }

      .share-status-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding-top: 24px;

        .info-status-wrapper {
          display: flex;

          & > * {
            width: 50%;
          }

          ${media.lg`
              align-items: center;
              flex-grow: 1;
              & > * {
                width: auto;
              }
            `}
        }

        .drag-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }

  .your-share-wrapper,
  .share-detail-wrapper {
    height: 100%;
    background: ${palette('background', 1)};
    box-shadow: 0px 1px 3px ${palette('gray', 0)};
    border-radius: 3px;

    position: relative;
  }
`;

export const Tabs = styled(UnstyledTabs)`
  width: 100%;
  padding-top: 10px !important;
  .ant-tabs-tabpane {
    padding: 0 20px;
  }
`;

export const PopoverContainer = styled.div`
  padding: 10px 0;

  &.stake-ratio-select {
    .ant-popover-arrow {
      border-top: none;
      border-right: none;
    }

    .ant-popover-open {
      width: 20px;
    }

    button {
      width: 25px;
      height: 25px;
      min-width: 0px;
      padding-top: 2px;
      padding-left: 5px;
      padding-right: 4px;
      border-radius: 50%;

      svg {
        font-size: 18px;
      }
    }
  }
`;

export const FeeParagraph = styled(Paragraph)`
  padding-top: 10px;
  & > * {
    color: ${palette('text', 1)};
  }
`;

export const RuneStakeView = styled.div`
  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: ${palette('primary', 0)};

    .label-wrapper {
      color: ${palette('primary', 0)};
    }
    svg {
      margin-left: 8px;
    }
  }
`;

export const TxDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-left: 10px;

  .label-wrapper {
    padding: 2px 0;
  }
`;

export const InformationWrapper = styled.div`
  border: 1px solid ${palette('gray', 0)};
  padding: 0 10px;
  margin: 0 10px;

  ${media.md`
    margin: 0px;
  `}

  .label-wrapper,
  .ant-typography {
    padding-top: 4px;
    padding-bottom: 4px;
    margin-bottom: 0px;
  }
`;

export const HeaderAction = styled.div`
  position: absolute;
  top: -40px;
  right: 10px;

  ${media.sm`
    top: 20px;
    right: 10px;
  `}

  .btn-wrapper {
    border-radius: 8px;
    min-width: 30px;
  }
`;

export const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
