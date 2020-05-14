import React from 'react';
import classes from './button.css';
const button = (props) => {
    return (
        <button onClick={props.clicked} className={[classes.button, classes[props.btnType]]}>
            {props.children}</button>
    )
}

export default button;