import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


import LoginRootComponent from "./components/login-page/login-root";
import TablePage from "./components/table/table-page/table-page";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers/rootReducer";
import {Provider, useDispatch, useSelector} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import NotfoundPage from "./components/notfound-page/NotfoundPage";
import TableHeader from "./components/table/table-header/table-header";
import RequireAuth from "./tools/PrivateRouter";
import {updateToken} from "./actions/asyncActions/AuthFetch";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import {fetchUsersList} from "./actions/asyncActions/usersData";




const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


function App() {
    const dispatch = useDispatch()
    const autTokens = useSelector(state => state.Auth.authToken)
    const refreshToken = localStorage.getItem('refreshToken')

    useEffect(() => {
        let fourMinutes = 1000*64
        dispatch(fetchUsersList())
       let interval = setInterval(()=>{
           if(refreshToken){
               dispatch(updateToken(refreshToken))
           }
       }, fourMinutes)
        return () => clearInterval(interval)
    }, [autTokens])

    return (
        <>
             <TableHeader />
             <Routes>
                 <Route path="/" element={
                     <RequireAuth>
                         <TablePage/> />
                     </RequireAuth>
                 }  />
                 <Route path="/profile/:id" element={
                     <RequireAuth>
                         <ProfilePage/> />
                     </RequireAuth>
                 }  />

                <Route element={<LoginRootComponent/>} path="/login" />
                <Route element={<RegisterPage/>} path="/register" />
                <Route element={<NotfoundPage/>} path="*"/>
            </Routes>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);


