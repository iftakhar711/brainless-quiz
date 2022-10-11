import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './navbar/Nav';

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;