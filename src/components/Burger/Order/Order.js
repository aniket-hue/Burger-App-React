import React from 'react';
import classes from '../Order/Order.css';
import modal from '../../UI/Modals'
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