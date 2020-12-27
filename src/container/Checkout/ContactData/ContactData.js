import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axios from "../../../axios";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        config: {
          name: "name",
          type: "text",
          placeholder: "Enter the name",
        },
        value: "",
      },
      email: {
        elementType: "input",
        config: {
          name: "email",
          type: "email",
          placeholder: "Enter the email",
        },
        value: "",
      },
      Street: {
        elementType: "input",
        config: {
          name: "Street",
          type: "text",
          placeholder: "Enter the street",
        },
        value: "",
      },
      postalcode: {
        elementType: "input",
        config: {
          name: "postalcode",
          type: "text",
          placeholder: "Enter the postal",
        },
        value: "",
      },
    },
    loading: false,
  };

  orderHandler = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    console.log(this.props.ingredients);
    const temp = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      email: this.state.orderForm.email.value,
      zipcode: this.state.orderForm.postalcode.value,
      name: this.state.orderForm.name.value,
      Address: this.state.orderForm.Street.value,
    };

    try {
      await axios.post("/orders.json", temp);
      this.setState({ loading: false });
      alert("Your order is successfully received");
      this.props.history.push("/Burger-App-React");
    } catch (error) {
      this.setState({ loading: false });
    }
  };

  purchaseCancel = () => {
    this.setState({ purchasing: false });
  };

  changeHandler = (event) => {
    const key = event.target.getAttribute("name");
    const obj = this.state.orderForm;
    obj[key].value = event.target.value;
    this.setState({ orderForm: obj });
  };

  render() {
    return (
      <div className={classes.ContactData}>
        {this.state.loading === true ? (
          <Spinner />
        ) : (
          <div>
            <h4>Enter Your Contact Data</h4>
            <form>
              <Input
                onChange={this.changeHandler}
                elementType={this.state.orderForm.name}
              />
              <Input
                onChange={this.changeHandler}
                elementType={this.state.orderForm.email}
              />
              <Input
                onChange={this.changeHandler}
                elementType={this.state.orderForm.Street}
              />
              <Input
                onChange={this.changeHandler}
                elementType={this.state.orderForm.postalcode}
              />
              <Button btnType="Success" clicked={this.orderHandler}>
                ORDER
              </Button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default ContactData;
