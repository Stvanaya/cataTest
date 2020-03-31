/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

import { Color } from 'types/styles';

interface TextProps {
  color?: Color;
  align?: string;
  isBold?: boolean;
  isUpperCase?: boolean;
  isXXS?: boolean;
  margin?: string;
  padding?: string;
}

const Text = styled.p<TextProps>`
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme, isBold }) =>
    isBold ? theme.font.bold : theme.font.rgl};
  font-size: ${({ theme }) => theme.font.sizeSM};
  color: ${({ theme, color }) =>
    color ? theme.color[color] : theme.color.navy};
  text-align: ${({ align }) => align || 'left'};
  margin: ${({ margin }) => margin || '0px'};
  padding: ${({ padding }) => padding || '0px'};
  text-transform: ${({ isUpperCase }) => isUpperCase && 'uppercase'};
  line-height: normal;
  letter-spacing: normal;
`;

export const SmallText = styled(Text)`
  font-size: ${({ theme, isXXS }) =>
    isXXS ? theme.font.sizeXXS : theme.font.sizeXS};
`;

export default Text;
