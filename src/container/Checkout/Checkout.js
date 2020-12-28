import React from "react";
import CheckoutSum from "../../components/Checkout/Checkout";
import { Route } from "react-router-dom";
import ContactData from "../../container/Checkout/ContactData/ContactData";
import { connect } from "react-redux";
class Checkout extends React.Component {
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
          ingredients={this.props.ings}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          exact
          component={ContactData}
        />
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
export default connect(mapStateToProps, null)(Checkout);
