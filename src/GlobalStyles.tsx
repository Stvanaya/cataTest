/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.color.bg};
    padding-top: 60px;
  }
`;

export default globalStyles;
