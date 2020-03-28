/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

interface TitleProps {
  margin?: string;
}

const Title = styled.h1<TitleProps>`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.sizeXLG};
  color: ${({ theme }) => theme.color.navy};
  margin: ${p => p.margin || '0px'};

  @media (max-width: 576.98px) {
    font-size: ${({ theme }) => theme.font.sizeLG};
  }
`;

export const TitleH2 = styled(Title).attrs(() => ({
  as: 'h2',
}))`
  font-size: ${({ theme }) => theme.font.sizeLG};

  @media (max-width: 576.98px) {
    font-size: ${({ theme }) => theme.font.sizeXMD};
  }
`;

export const TitleH4 = styled(Title).attrs(() => ({
  as: 'h4',
}))`
  font-size: ${({ theme }) => theme.font.sizeXMD};

  @media (max-width: 576.98px) {
    font-size: ${({ theme }) => theme.font.sizeMD};
  }
`;

export default Title;
