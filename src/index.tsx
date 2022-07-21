import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider } from '@mui/material';
import { weatherTheme } from 'shared/modules/mui';

//@ts-ignore: experimental createRoot
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <ThemeProvider theme={weatherTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
