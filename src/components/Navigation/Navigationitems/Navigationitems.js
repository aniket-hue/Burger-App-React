import React from 'react';
import Navigationitem from './Navigationitem/Navigationitem';
import classes from '../Navigationitems/Navigationitems.module.css';
const navigationitems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <Navigationitem link ="/" active>Burger Builder</Navigationitem>
            <Navigationitem link =  "/"  >Checkout</Navigationitem>
        </ul>
    );
}

export default navigationitems;