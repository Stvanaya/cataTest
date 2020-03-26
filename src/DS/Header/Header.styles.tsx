/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

const Header = styled.header`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.header};
  width: 100vw;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
`;

export default Header;
