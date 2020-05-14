import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    // console.log(new Array(props.ingredients['salad']).fill());
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return Array(props.ingredients[igKey]).fill(0).map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        });

    const flag = () => {
        let sum = 0;
        transformedIngredients.forEach(element => {
            sum += element.length;
        });
        return sum === 0 ? true : false;
    };

    // [...Array(props.ingredients[igKey])]
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {flag() ? <p>Please start adding </p> : transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};
export default burger;
