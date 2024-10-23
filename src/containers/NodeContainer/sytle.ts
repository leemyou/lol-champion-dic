import styled from "styled-components";

export const StyledNodeContainer = styled.div`
  width: 100%;
  height: calc(100vh - 40px);
  overflow: hidden;
`;

//==================================================//

export const StyledNode = styled.div`
  width: 100%;
  height: 100%;

  > .node-img-wrap {
    background-position: center center;
    background-repeat: no-repeat;
    object-fit: cover;
    background-size: cover;
    height: 100%;
    width: 100%;
    border-radius: 40px;
    overflow: hidden;
  }
`;
