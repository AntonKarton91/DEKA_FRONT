import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import RegLogForm from "./components/login-page/login-form-container";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RegLogForm />
  </>
);

reportWebVitals();
