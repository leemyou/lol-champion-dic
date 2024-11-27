import { Drawer, type DrawerProps } from "@mui/material";
import styled from "styled-components";

export const StyledDrawer = styled(Drawer)<DrawerProps>`
  .drawer-wrapper {
    padding: 24px 0;
    height: 100%;
    display: flex;
    flex-direction: column;

    &-top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 24px;
      align-items: center;
    }

    &-middle {
      width: 100%;
      flex: 1;
      text-align: left;
      padding: 0 24px;
      margin: 12px 0 24px 0;

      > p {
        font-weight: bold;
      }

      &-selects {
        overflow-y: scroll;
        max-height: 50vh;

        &-box {
          margin-top: 8px;
          display: flex;
          flex-direction: column;

          > p {
            opacity: 0.6;
          }

          > label:nth-child(2) {
            margin-left: 4px;
          }

          > label:not(:nth-child(2)) {
            margin-left: 16px;
          }
        }
      }
    }

    &-bottom {
      width: 100%;

      &-lang {
        margin-bottom: 24px;
        padding: 0 24px;
        text-align: left;

        > p {
          text-align: left;
          font-weight: bold;
          margin-bottom: 4px;
        }
      }

      &-footer {
        padding: 24px 0 0 24px;

        > p {
          text-align: left;
          font-size: 0.9rem;
        }
      }
    }
  }
`;
