import React from 'react';
import {Route, Routes,} from "react-router-dom";
import {privateRouter, publicRouter} from "../router";
import Login from "../pages/login";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    return (
        isAuth
        ?
            <Routes>
            {privateRouter.map(route =>
                <Route path={route.patch} element={< route.component />} key={route.patch}/>
            )}
                <Route path='*' element={< Login/>}/>
            </Routes>
            :
        <Routes>
            {publicRouter.map(route =>
                <Route path={route.patch} element={<route.component />} key={route.patch}/>
            )}
            <Route path='*' element={< Login/>}/>
        </Routes>
    );
};

export default AppRouter;
