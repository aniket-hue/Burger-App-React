import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modals";
import axios from "../../axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import { connect } from "react-redux";
import * as actionTypes from "../../store/action";

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    loading: false,
    startLoad: true,
  };

  // componentDidMount() {
  //   axios
  //     .get("https://react-my-burger-f2.firebaseio.com/ingredients.json", {
  //       crossdomain: true,
  //     })
  //     .then((res) => {
  //       this.setState({ ingredients: res.data });
  //       this.setState({ startLoad: true });
  //     });
  // }

  purchaseAble = () => {
    const temp = Object.values(this.props.ings);

    let sum = 0;
    for (let num of temp) sum = sum + num;

    return sum > 0;
  };

  modalHandler = () => {
    const temp = this.state.purchasing;

    this.setState({ purchasing: !temp });
  };

  purchaseContinue = () => {
    this.props.history.push('/checkout');
  };

  render() {
    let flag = this.purchaseAble();
    return (
      <div>
        {!this.state.startLoad ? (
          <Spinner />
        ) : (
          <Aux>
            <Burger ingredients={this.props.ings} />
            <BuildControls
              ingredients={this.props.ings}
              price={this.props.price}
              More={this.props.onIngredientAdded}
              Less={this.props.onIngredientRemoved}
              purchaseAble={flag}
              handle={this.modalHandler}
              loading={this.state.loading}
            />
            {this.state.purchasing ? (
              this.state.loading ? (
                <Spinner />
              ) : (
                <Modal
                  ingredients={this.props.ings}
                  clicked={this.modalHandler}
                  continue={this.purchaseContinue}
                  cancel={() => this.setState({ purchasing: false })}
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

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (value) =>
      dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: value }),
    onIngredientRemoved: (value) =>
      dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
