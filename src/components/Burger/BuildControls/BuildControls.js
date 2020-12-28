import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
import Order from "../Order/Order";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
];
const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        <span className={classes.p}> Price </span> : {props.price}
      </p>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            ingredients={props.ingredients}
            added={() => props.More(ctrl.type)}
            remove={() => props.Less(ctrl.type)}
            key={ctrl.label}
            label={ctrl.label}
          />
        );
      })}
      <Order disable={props.purchaseAble} handle={() => props.handle()} />
    </div>
  );
};

export default buildControls;
