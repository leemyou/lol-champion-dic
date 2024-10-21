import styled from "styled-components";
import { Dialog } from "@mui/material";

export const ChampDetail = styled(Dialog)`
  .dialog-content {
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 0;

    &-box {
      background: linear-gradient(45deg, #ffffff, #ffffff42, #fff0);
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      &-cancle {
        position: absolute;
        top: 8px;
        right: 8px;
      }

      &-subtitle {
        font-style: italic;
      }
    }
  }
`;
