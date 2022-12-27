import React from 'react';
import ReactDOM from 'react-dom/client';

// Use consistent styling
import 'sanitize.css/sanitize.css';
// Initialize languages
import './locales/i18n';
// App styles
import 'bulma/css/bulma.min.css';
import 'bulma-switch';
import 'react-datepicker/dist/react-datepicker.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
