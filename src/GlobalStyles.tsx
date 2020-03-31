/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.color.bg};
    padding-top: 60px;
    margin: 0;
    overflow-x: hidden;
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.sizeSM};
  }
`;

export default globalStyles;
