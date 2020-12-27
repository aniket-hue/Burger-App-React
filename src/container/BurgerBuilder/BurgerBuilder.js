import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modals";
import axios from "../../axios";
import Spinner from "../../components/UI/Spinner/Spinner";
const PRICES = {
  salad: 0.5,
  bacon: 2,
  meat: 3,
  cheese: 1,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: null,
      meat: null,
      cheese: null,
      bacon: null,
    },
    totalPrice: 0,
    purchasing: false,
    loading: false,
    startLoad: false,
  };

  componentDidMount() {
    axios
      .get("https://react-my-burger-f2.firebaseio.com/ingredients.json", {
        crossdomain: true,
      })
      .then((res) => {
        this.setState({ ingredients: res.data });
        this.setState({ startLoad: true });
      });
  }

  purchaseAble = () => {
    const temp = Object.values(this.state.ingredients);

    let sum = 0;
    for (let num of temp) sum = sum + num;

    return sum > 0;
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedI = {
      ...this.state.ingredients,
    };
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + PRICES[type];
    updatedI[type] = updatedCount;
    this.setState({ totalPrice: updatedPrice, ingredients: updatedI });
  };

  removeIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount !== 0) {
      const updatedCount = oldCount - 1;

      const updatedI = {
        ...this.state.ingredients,
      };
      const oldPrice = this.state.totalPrice;

      const updatedPrice = oldPrice - PRICES[type];

      updatedI[type] = updatedCount;

      this.setState({ totalPrice: updatedPrice, ingredients: updatedI });
    }
  };

  modalHandler = () => {
    const temp = this.state.purchasing;

    this.setState({ purchasing: !temp });
  };

  purchaseContinue = () => {
    const queryparams = [];
    for (let i in this.state.ingredients) {
      queryparams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    queryparams.push("price=" + this.state.totalPrice);

    const queryString = queryparams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
  };

  render() {
    let flag = this.purchaseAble();

    return (
      <div>
        {!this.state.startLoad ? (
          <Spinner />
        ) : (
          <Aux>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls
              price={this.state.totalPrice}
              More={this.addIngredientHandler}
              Less={this.removeIngredient}
              purchaseAble={flag}
              handle={this.modalHandler}
              loading={this.state.loading}
            />
            {this.state.purchasing ? (
              this.state.loading ? (
                <Spinner />
              ) : (
                <Modal
                  ingredients={this.state.ingredients}
                  clicked={this.modalHandler}
                  continue={this.purchaseContinue}
                  cancel={this.purchaseCancel}
                  show={this.state.purchasing}
                />
              )
            ) : null}
          </Aux>
        )}
      </div>
    );
  }
}

export default BurgerBuilder;
