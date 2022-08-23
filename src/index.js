import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css'



import LoginRootComponent from "./components/login-page/login-root";
import TablePage from "./components/table/table-page/table-page";
import {createStore} from "redux";
import {rootReducer} from "./reducers/rootReducer";
import {Provider} from "react-redux";

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <div className='app-root'>
        <TablePage />
      </div>
    </Provider>
);


reportWebVitals();
