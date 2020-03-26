import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      navy: string;
      teal: string;
      vlBlue: string;
      iceBlue: string;
      disabledBlue: string;
      gray: string;
      white: string;
      bg: string;
    };
    font: {
      family: string;
      bold: number;
      rgl: number;
      sizeXXS: string;
      sizeXS: string;
      sizeSM: string;
      sizeXMD: string;
      sizeMD: string;
      sizeLG: string;
      sizeXLG: string;
    };
    shadow: {
      aqua: string;
      card: string;
      header: string;
    };
    layout: {
      grid: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xlg: string;
      };
    };
    misc: {
      bRadius: string;
    };
  }
}
