import { createRoot } from 'react-dom/client';

import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider } from '@mui/material';
import { weatherTheme } from 'modules/mui';

//@ts-ignore: experimental createRoot
const root = createRoot(document.getElementById('root')!);
root.render(
  <ThemeProvider theme={weatherTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
