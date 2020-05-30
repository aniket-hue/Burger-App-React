import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css'
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios';

class ContactData extends React.Component {
    state = {
        name: '',
        age: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false,
    }

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const temp = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            name: 'Aniket',
            Address: 'Bakers Street'
        }

        console.log(temp)

        axios.post('/orders.json', temp)
            .then(response => {
                this.setState({ loading: false })
                alert('Your order is successfully received');
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false })
            });
    }

    purchaseCancel = () => {
        this.setState({ purchasing: false });
    }

    render() {
        console.log(this.props.ingredients);
        return (
            <div className={classes.ContactData}>
                {this.state.loading === true ? <Spinner /> :
                    <div>
                        <h4>Enter Your Contact Data</h4>
                        <form>
                            <input type="text" name="name" placeholder="Your Name" />
                            <input type="email" name="email" placeholder="Your Mail" />
                            <input type="text" name="street" placeholder="Street" />
                            <input type="text" name="postal" placeholder="Postal Code" />
                            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                        </form>
                    </div>
                }
            </div>

        );
    }
}

export default ContactData;