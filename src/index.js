import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css'

import LoginRootComponent from "./components/login-page/login-root";
import TablePage from "./components/table/table-page/table-page";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='app-root'>
    <TablePage />
    {/*<LoginRootComponent />*/}
  </div>
);


reportWebVitals();
