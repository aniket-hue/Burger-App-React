import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modals';
import axios from '../../axios';
import Spinner from '../../components/UI/Spinner/Spinner';
const PRICES = {
    salad: .5,
    bacon: 2,
    meat: 3,
    cheese: 1

};
class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                meat: 0,
                cheese: 0,
                bacon: 0
            },
            totalPrice: 4,
            purchasing: false,
            loading: false
        }
    }

    purchaseAble = () => {
        const temp = Object.values(this.state.ingredients);

        let sum = 0;
        for (let num of temp)
            sum = sum + num


        return sum > 0;
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        // console.log(updatedCount);
        // console.log(type);
        const updatedI = {
            ...this.state.ingredients
        };
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + PRICES[type];
        updatedI[type] = updatedCount;
        this.setState({ totalPrice: updatedPrice, ingredients: updatedI });
        // console.log(updatedI);  

    }

    removeIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount !== 0) {
            const updatedCount = oldCount - 1;

            const updatedI = {
                ...this.state.ingredients
            };
            const oldPrice = this.state.totalPrice;

            const updatedPrice = oldPrice - PRICES[type];

            updatedI[type] = updatedCount;

            this.setState({ totalPrice: updatedPrice, ingredients: updatedI });
        }
    }

    modalHandler = () => {
        const temp = this.state.purchasing;

        this.setState({ purchasing: !temp });
    }

    purchaseContinue = () => {

        this.setState({ loading: true });
        const temp = {
            ingredients: this.state.ingredients,
            price: this.state.price,
            name: 'Aniket',
            Address: 'Bakers Street'
        }

        axios.post('/orders.json', temp)
            .then(response => {
                console.log(this.state.loading + " asd");
                this.setState({ loading: false, purchasing: false })
            })
            .catch(error => {
                this.setState({ loading: false })
            });

        console.log(this.state.loading + "asda");
    }

    purchaseCancel = () => {
        console.log("OK Cancel");
    }

    render() {
        let flag = this.purchaseAble();
        // console.log(this)
        // console.log(this.state.purchasing)

        return (
            <Aux>
                {/* <Spinner/> */}
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    price={this.state.totalPrice}
                    More={this.addIngredientHandler}
                    Less={this.removeIngredient}
                    purchaseAble={flag}
                    handle={this.modalHandler}
                    loading={this.state.loading}
                />
                {this.state.purchasing ? this.state.loading ?
                    <Spinner /> : <Modal
                        ingredients={this.state.ingredients}
                        clicked={this.modalHandler}
                        continue={this.purchaseContinue}
                        cancel={this.purchaseCancel}
                        show={this.state.purchasing} />
                    : null

                }
            </Aux>
        );
    }
}

export default BurgerBuilder;