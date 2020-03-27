/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

const DropdownHeader = styled.div`
  width: calc(100% - 40px);
  padding: 25px 20px 10px 20px;
  background-color: ${({ theme }) => theme.color.white};
`;

export default DropdownHeader;
