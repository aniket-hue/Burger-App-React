import React from "react";
import classes from "./Input.module.css";
const input = (props) => {
  // console.log(props)
  let inputElement = null;
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          {...props.elementType.config}
          value={props.value}
          className={classes.InputElement}
          onChange={props.onChange}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          {...props.elementType.config}
          value={props.value}
          className={classes.InputElement}
          onChange={props.onChange}
        />
      );
      break;
    default:
      inputElement = (
        <input
          {...props.elementType.config}
          value={props.value}
          className={classes.InputElement}
          onChange={props.onChange}
        />
      );
      break;
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
