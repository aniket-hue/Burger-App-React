import React from 'react';
import classes from '../Togglebutton/Togglebutton.module.css'
const togglebutton = (props) => {
    return (
        <div className={classes.DrawerToggle} onClick={props.clicked}>
            MENU
        </div>
    );
}

export default togglebutton;