/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

type ColumnValidRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface ColumnProps {
  xs?: ColumnValidRange;
  sm?: ColumnValidRange;
  md?: ColumnValidRange;
  lg?: ColumnValidRange;
  xlg?: ColumnValidRange;
}

const Column = styled.div<ColumnProps>`
  /* Extra Small Devices */
  @media (max-width: 576.98px) {
    & {
      grid-column: ${({ xs }) => (xs ? `span ${xs}` : 'span 12')};
    }
  }

  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) and (max-width: 767.98px) {
    & {
      grid-column: ${({ sm }) => (sm ? `span ${sm}` : 'span 12')};
    }
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) and (max-width: 991.98px) {
    & {
      grid-column: ${({ md }) => (md ? `span ${md}` : 'span 12')};
    }
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) and (max-width: 1199.98px) {
    & {
      grid-column: ${({ lg }) => (lg ? `span ${lg}` : 'span 12')};
    }
  }

  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    & {
      grid-column: ${({ xlg }) => (xlg ? `span ${xlg}` : 'span 12')};
    }
  }
`;

export default Column;
