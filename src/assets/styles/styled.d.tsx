import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    basicWidth: string;

    color: {
      main: string;
      mainBg: string;
      txt: string;
      grayTxt: string;
    };
  }
}
