import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button'
import classes from './Checkout.module.css';
const checkoutsum = (props) => {
    return (
        <div className={classes.container}>
            <h1>We hope it taste good</h1>
            <div style={{ width: '100%', height: '300px', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger" clicked={() => props.cancel()}>CANCEL</Button>
            <Button btnType="Success" clicked={() => props.continue()}>CONTINUE</Button>

        </div>
    );
}

export default checkoutsum;