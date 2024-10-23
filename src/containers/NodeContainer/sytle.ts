import styled from "styled-components";

export const StyledNodeContainer = styled.div`
  width: 100%;
  height: calc(100vh - 40px);
  overflow: hidden;
`;

//==================================================//

type NodeProps = {
  img: string;
};

export const StyledNode = styled.div<NodeProps>`
  background-image: ${({ img }) => img && img};
`;
