import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Sidedrawer from "../../components/Navigation/Sidedrawer/Sidedrawer";
class Layout extends Component {
  state = {
    showSidebar: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
  };

  render() {
    return (
      <Aux>
        <Toolbar sidebarhandle={this.sideDrawerClosedHandler} />
        <Sidedrawer
          open={this.state.showSidebar}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={Classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
