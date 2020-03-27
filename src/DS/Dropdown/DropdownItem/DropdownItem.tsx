/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components';

interface DropdownItemProps {
  isSelected?: boolean;
}

const isSelectedStyles = css`
  border-right: ${({ theme }) => `4px solid ${theme.color.primary}`};
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.color.primary};
`;

const DropdownItem = styled.li<DropdownItemProps>`
  all: unset;
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.sizeXS};
  text-transform: capitalize;
  color: ${({ theme }) => theme.color.navy};
  width: calc(100% - 29px);
  height: 40px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  padding: 0 0px 0 25px;
  margin: 5px 0;
  cursor: pointer;

  & > img,
  & > span {
    margin-right: 15px;
  }

  ${({ isSelected }) => isSelected && isSelectedStyles};
`;

export default DropdownItem;
