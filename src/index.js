import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CurrentTime from './CurrentTime';

ReactDOM.render(
  <React.StrictMode>
    <CurrentTime />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
