import React from 'react';
import { render as renderDom } from 'react-dom';
import { render as renderSnapshot } from 'react-snapshot';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const { NODE_ENV = '' } = process.env;
const render = NODE_ENV === 'development' ? renderDom : renderSnapshot;

render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);

registerServiceWorker();
