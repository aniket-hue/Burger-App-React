import React, { Component } from 'react';
import Classes from '../BurgerIngredient/BurgerIngredient.module.css'
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
    render() {
        let ingredient = null;
        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={Classes.BreadBottom} />;
                break;
            case ('bread-top'):
                ingredient =
                    <div className={Classes.BreadTop}>
                        <div className={Classes.Seeds1}></div>
                        <div className={Classes.Seeds2}></div>
                    </div>;
                break;
            case ('meat'):
                ingredient = <div className={Classes.Meat}>
                </div>
                break;
            case ('cheese'):
                ingredient = <div className={Classes.Cheese} />;
                break;
            case ('bacon'):
                ingredient = <div className={Classes.Bacon} />;
                break;
            case ('salad'):
                ingredient = <div className={Classes.Salad} />;
                break;
            default:
                return null;
        }
        return ingredient;
    }
}
// BurgerIngredient.prototype = {
//     type: PropTypes.string.isRequired
// }
export default BurgerIngredient;