import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from "utils/theme";
import './index.css';
import { persistor, store } from 'redux/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook/">
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>        
      </PersistGate>      
    </Provider>      
    
  </React.StrictMode>
);