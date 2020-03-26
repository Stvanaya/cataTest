/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

const Button = styled.button`
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.bold};
  font-size: ${({ theme }) => theme.font.sizeXS};
  padding: 10px 15px;
  min-width: 100px;
  border: none;
  border-radius: ${({ theme }) => theme.misc.bRadius};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const ButtonPrimary = styled(Button)`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary};
  box-shadow: ${({ theme }) => theme.shadow.aqua};
`;

export const ButtonSecondary = styled(Button)`
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.iceBlue};
`;

export default Button;
