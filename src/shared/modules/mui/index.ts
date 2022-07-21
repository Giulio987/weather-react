import { createTheme } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';

declare module '@mui/private-theming' {
  interface DefaultTheme {
    spacing: (spacing: number) => string;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    rainy: {
      main: string;
      light: string;
    };
    cloudy: {
      main: string;
      light: string;
    };
    defaultGrey: string;
    backgroundColor: string;
  }
  interface PaletteOptions {
    rainy: {
      main: string;
      light: string;
    };
    cloudy: {
      main: string;
      light: string;
    };
    defaultGrey: string;
    backgroundColor: string;
  }
}

export const weatherTheme: Theme = createTheme({
  palette: {
    primary: {
      main: '#5374E7',
      light: '#77B9F5',
    },
    secondary: {
      main: '#01175F',
    },
    rainy: {
      main: '#011354',
      light: '#5B9FE3',
    },
    cloudy: {
      main: '#464C64',
      light: '#99A9B9',
    },
    defaultGrey: '#B8B8B8',
    backgroundColor: '#B3B3B3',
  },
  spacing: 10,
});
