import React from 'react';
import classes from '../Order/Order.module.css';
const order = (props) => {
    return (
        <button
            className={classes.OrderButton}
            disabled={!props.disable}
            onClick={props.handle}>
            ORDER NOW
        </button>
    );
}

export default order;