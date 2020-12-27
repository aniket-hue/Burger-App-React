import React from "react";
import classes from "./Toolbar.module.css";
import NavigationItems from "../Navigationitems/Navigationitems";
import Logo from "../../Logo/Logo";
import Togglebutton from "../Togglebutton/Togglebutton";
const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <Togglebutton clicked={() => props.sidebarhandle()} />

      <Logo height="90%" />
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};
export default toolbar;
