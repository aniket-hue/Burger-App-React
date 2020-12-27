import React from "react";
import CheckoutSum from "../../components/Checkout/Checkout";
import { Route } from "react-router-dom";
import ContactData from "../../container/Checkout/ContactData/ContactData";
class Checkout extends React.Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
    price: 0,
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === "price") price = parseInt(param[1]);
      else ingredients[param[0]] = parseInt(param[1]);
    }
    this.setState({ ingredients: ingredients, price: price });
  }

  cancelHandle = () => {
    this.props.history.goBack();
  };

  continueHandle = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  render() {
    return (
      <div>
        <CheckoutSum
          cancel={this.cancelHandle}
          continue={this.continueHandle}
          ingredients={this.state.ingredients}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          exact
          render={(props) => (
            <ContactData
              price={this.state.price}
              ingredients={this.state.ingredients}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
