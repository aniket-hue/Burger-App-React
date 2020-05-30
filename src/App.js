import React, { Component } from 'react';
import Layout from './/components/Layout/Layout'
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Checkout from './container/Checkout/Checkout'
import { Route, Switch } from 'react-router';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/Burger-App-React" exact component={BurgerBuilder} />
            <Route path="/checkout" component={Checkout} />
          </Switch>

        </Layout>
      </div>
    );
  }
}

export default App;