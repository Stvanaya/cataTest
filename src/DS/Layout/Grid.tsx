/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto;
  justify-content: center;
  align-content: center;
  column-gap: 20px;

  /* Extra Small Devices */
  @media (max-width: 576.98px) {
    & {
      grid-template-columns: ${({ theme }) => theme.layout.grid.xs};
    }
  }

  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) and (max-width: 767.98px) {
    & {
      grid-template-columns: ${({ theme }) => theme.layout.grid.sm};
    }
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) and (max-width: 991.98px) {
    & {
      grid-template-columns: ${({ theme }) => theme.layout.grid.md};
    }
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) and (max-width: 1199.98px) {
    & {
      grid-template-columns: ${({ theme }) => theme.layout.grid.lg};
    }
  }

  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    & {
      grid-template-columns: ${({ theme }) => theme.layout.grid.xlg};
      column-gap: 30px;
    }
  }
`;

export default Grid;
