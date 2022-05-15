import React from 'react';

import {Banner} from "components/banner/Banner";
import {Header} from "components/header/Header";
import {Users} from "components/users/Users";

export const App = () => (
        <div>
            <Header/>
            <Banner/>
            <Users/>
        </div>
    );
