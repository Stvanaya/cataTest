/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

interface BannerProps {
  bgUrl: string;
}

const Banner = styled.article<BannerProps>`
  width: calc(100% - 60px);
  max-height: 200px;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.misc.bRadius};
  box-shadow: 0 10px 10px 0 rgba(0, 212, 200, 0.16);
  background-image: ${({ bgUrl }) => `url(${bgUrl})`};
  background-color: ${({ theme }) => theme.color.primary};
  background-size: cover;
  padding: 30px 30px;
  margin: 30px 0;

  & > p {
    color: ${({ theme }) => theme.color.navy};
    width: 80%;
    margin-bottom: 20px;
  }

  & > h2 {
    color: ${({ theme }) => theme.color.white};
    width: 70%;
    text-align: center;
  }

  /* Extra Small Devices */
  @media (max-width: 576.98px) {
    width: calc(100% - 24px);
    padding: 30px 12px;

    & > p,
    & > h2 {
      width: 100%;
    }
  }
`;

export default Banner;
