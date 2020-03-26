/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components';

interface CardProps {
  flexVerAlign?: boolean;
}

const flexVerticalAlign = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const Card = styled.div<CardProps>`
  ${({ flexVerAlign }) => (flexVerAlign ? flexVerticalAlign : false)};

  width: calc(100% - 30px);
  height: auto;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.misc.bRadius};
  transition: 0.2s ease-in-out;
  will-change: box-shadow;
  box-shadow: 0 10px 10px 0 rgba(32, 26, 66, 0.03);
  padding: 15px 10px;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.card};
  }
`;

export const SmallCard = styled(Card)`
  width: 120px;
  min-height: 150px;
  padding: 15px 10px;

  /* Extra Small Devices */
  @media (max-width: 576.98px) {
    & {
      padding: 15px 5px;
    }
  }
`;

export default Card;
