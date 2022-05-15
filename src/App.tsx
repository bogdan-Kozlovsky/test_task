import React from 'react';

import {Route, Routes } from 'react-router-dom';

import {PATH} from "common/enums/patch";
import {Banner} from "components/banner/Banner";
import {Header} from "components/header/Header";
import {Users} from "components/users/Users";

export const App = () => (
        <div>
            <Header/>
            <Routes>
                <Route path={PATH.BANNER} element={<Banner/>} />
                <Route path={PATH.USERS} element={<Users/>} />
                <Route path={'/*'} element={<div>error</div>} />
            </Routes>
            
        </div>
    );
