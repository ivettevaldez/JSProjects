import React from 'react';

import Aux from '../../../hoc/Aux';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';

import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
    return (
        <Aux>
            <Backdrop show />
            <div className={classes.SideDrawer} >
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;
