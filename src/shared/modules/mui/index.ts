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
  typography: {
    fontFamily: ['Poppins', 'san-serif'].join(','),
    h1: {
      //temperature
      fontSize: '50px',
      color: 'white',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#01175F',
      lineHeight: '48px',
    },
    //Principale
    h3: {
      fontSize: '28px',
      fontWeight: '600',
      color: 'white',
    },
    h4: {
      fontSize: '26px',
      color: 'white',
      fontWeight: '600',
      lineHeight: '39px',
    },
    subtitle1: {
      fontSize: '15px',
      color: 'white',
      fontWeight: '500',
    },
    subtitle2: {
      fontSize: '12px',
      color: 'white',
      fontWeight: '300',
    },
    body1: {
      fontSize: '22px',
      color: 'white',
      fontWeight: '600',
    },
    body2: {
      fontSize: '20px',
      color: '#01175F',
      fontWeight: '600',
      lineHeight: '18px',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '25px',
          background: 'linear-gradient(to right bottom, #5374E7, #77B9F5)',
          maxHeight: 140, //TODO mettere tutte le proprietà comuni a tutte le card
        },
      },
    },
  },
});
