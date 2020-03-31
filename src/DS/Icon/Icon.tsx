import styled from 'styled-components';

import { Color, CommonStyles } from 'types/styles';

interface IconProps extends CommonStyles {
  size?: string;
  color: Color;
}

const Icon = styled.i<IconProps>`
  font-size: ${({ size }) => size || '16px'};
  color: ${({ theme, color }) => theme.color[color] || theme.color.navy};
  margin: ${({ margin }) => margin || '5px'};
  padding: ${({ padding }) => padding || '0'};
  text-decoration: none;
`;

export default Icon;
