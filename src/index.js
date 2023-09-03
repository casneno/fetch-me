import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { CSSReset } from '@chakra-ui/react'
import theme from './theme';  // path to your theme file


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <App />
      </ChakraProvider>
    </Router>
  </React.StrictMode>
);

