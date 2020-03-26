/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components';

interface IconProps {
  isIconQuantity?: boolean;
  isQuantityDisabled?: boolean;
}
const IconQuantityDisabled = css`
  cursor: not-allowed;
  background-color: ${({ theme }) => theme.color.disabledBlue};
  color: ${({ theme }) => theme.color.white};
`;

const IconQuantity = css`
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.misc.bRadius};
  color: ${({ theme }) => theme.color.white};
`;

const Icon = styled.span<IconProps>`
  width: 17px;
  height: 17px;
  padding: 5px;
  color: white;
  text-align: center;

  ${({ isIconQuantity }) => isIconQuantity && IconQuantity};
  ${({ isQuantityDisabled }) => isQuantityDisabled && IconQuantityDisabled};
`;

export default Icon;
