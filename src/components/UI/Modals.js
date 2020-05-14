import React from 'react';
import classes from './Modal.css';
import Aux from '../../hoc/Aux';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
const modal = (props) => {
    const temp = { ...props.ingredients }
    // console.log(temp);
    return (
        <Aux>
            <Backdrop clicked={() => props.clicked()} />
            <div className={classes.Modal}>
                <p className={classes.p}>Your Order</p>
                <p>A delicious burger with following ingredients:</p>
                <ul>
                    <li>Salad: {temp['salad']} </li>
                    <li>Cheese: {temp['cheese']} </li>
                    <li>Bacon: {temp['bacon']}</li>
                    <li>Meat:{temp['meat']} </li>
                </ul>
                <p>Continue to Checkout?</p>
            </div>
        </Aux>
    )
}

export default modal;