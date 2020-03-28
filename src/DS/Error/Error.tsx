/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

const ErrorComponent = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.color.white};
  border: ${({ theme }) => theme.misc.grayBorder};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ErrorComponent;
