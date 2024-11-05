import styled from "styled-components";

export const StyledHeader = styled.div`
  height: 40px;
  padding: 0 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .header-search-wrapper {
    display: flex;
    align-items: center;

    > svg {
      margin: 4px 2px 0 0;
      cursor: pointer;
    }
  }

  .header-btn-wrapper {
    display: flex;
    column-gap: 8px;
  }
`;
