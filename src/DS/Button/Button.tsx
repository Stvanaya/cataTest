/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components';

type ButtonType = 'primary' | 'secondary';

interface ButtonProps {
  isSmallText?: boolean;
  margin?: string;
  padding?: string;
  typeBtn: ButtonType;
  isQuantityBtn?: boolean;
  fullWidth?: boolean;
}

const ButtonPrimaryStyles = css`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary};
  box-shadow: ${({ theme }) => theme.shadow.aqua};
`;

const ButtonSecondaryStyles = css`
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.iceBlue};
`;

const ButtonQuantityStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button<ButtonProps>`
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.bold};
  font-size: ${({ theme, isSmallText }) =>
    isSmallText ? theme.font.sizeXXS : theme.font.sizeXS};
  padding: ${({ padding }) => padding || '10px 12px'};
  margin: ${({ margin }) => margin || '0px'};
  min-width: 100px;
  width: ${({ fullWidth }) => fullWidth && '100%'};
  border: none;
  border-radius: ${({ theme }) => theme.misc.bRadius};
  outline: none;
  cursor: pointer;

  ${({ typeBtn }) =>
    typeBtn === 'primary' ? ButtonPrimaryStyles : ButtonSecondaryStyles};
  ${({ isQuantityBtn }) => isQuantityBtn && ButtonQuantityStyles};

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.color.disabledBlue};
    color: ${({ theme }) => theme.color.white};
    box-shadow: none;
  }

  &:focus {
    outline: none !important;
  }
`;

export default Button;
