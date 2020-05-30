import React from 'react';
import Navigationitem from './Navigationitem/Navigationitem';
import classes from '../Navigationitems/Navigationitems.module.css';
import { Link } from 'react-router-dom';
const navigationitems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <Navigationitem link ="/" active>Burger Builder</Navigationitem>
        </ul>
    );
}

export default navigationitems;