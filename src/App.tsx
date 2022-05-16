import React from 'react';

import {Route, Routes } from 'react-router-dom';

import {PATH} from "common/enums/patch";
import {Banner} from "components/banner/Banner";
import {Form} from "components/form/Form";
import {Header} from "components/header/Header";
import {Users} from "components/users/Users";

export const App = () => (
        <div>
            <Header/>
            <Routes>
                <Route path={PATH.BANNER} element={<Banner/>} />
                <Route path={PATH.USERS} element={<Users/>} />
                <Route path={PATH.FORM} element={<Form/>} />
                <Route path={'/*'} element={<div>error</div>} />
                {/* <Route path={PATH.ERROR_404} element={<Error404 />} /> */}
                {/* <Route path="*" element={<Navigate to="404" />} /> */}
            </Routes>
            
        </div>
    );
