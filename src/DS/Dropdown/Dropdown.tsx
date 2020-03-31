/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

interface DropdownProps {
  fullWidth?: boolean;
}

const Dropdown = styled.div<DropdownProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '300px')};
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.white};
  border: ${({ theme }) => theme.misc.grayBorder};
  border-radius: ${({ theme }) => theme.misc.bRadius};
  overflow: hidden;

  /* Extra Small Devices */
  @media (max-width: 576.98px) {
    & {
      width: 100%;
    }
  }
`;

export default Dropdown;
