import React from 'react';
import CheckoutSum from '../../components/Checkout/Checkout'
import { Route } from 'react-router-dom';
import ContactData from '../../container/Checkout/ContactData/ContactData'
class Checkout extends React.Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            ingredients[param[0]] = parseInt(param[1]);
        }
        // console.log(ingredients);
        this.setState({ ingredients: ingredients });

    }

    cancelHandle = () => {
        this.props.history.goBack();
    }

    continueHandle = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    render() {
        console.log(this.props)
        console.log(this.state.ingredients)
        return (
            <div>
                <CheckoutSum
                    cancel={this.cancelHandle}
                    continue={this.continueHandle}
                    ingredients={this.state.ingredients}
                />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    exact
                    render={() => (<ContactData ingredients={this.state.ingredients} />)} />
            </div>

        );
    }
}

export default Checkout;