import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BottomNavigationStyleConfig as BottomNavigation } from 'chakra-ui-bottom-navigation';

const theme = extendTheme({components: {BottomNavigation}});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Router>
  </React.StrictMode>
);

