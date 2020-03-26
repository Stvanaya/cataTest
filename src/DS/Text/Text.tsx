/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

interface TextProps {
  align?: string;
  isBold?: boolean;
}

const Text = styled.p<TextProps>`
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme, isBold }) =>
    isBold ? theme.font.bold : theme.font.rgl};
  font-size: ${({ theme }) => theme.font.sizeSM};
  color: ${({ theme }) => theme.color.navy};
  text-align: ${({ align }) => align || 'left'};
  line-height: normal;
  letter-spacing: normal;
  margin: 8px 10px;
`;

export const SmallText = styled(Text)`
  font-size: ${({ theme }) => theme.font.sizeXS};
`;

export const TextHighlight = styled(Text)`
  color: ${({ theme }) => theme.font.bold};
`;

export default Text;
