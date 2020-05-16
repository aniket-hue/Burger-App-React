import React from 'react';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';
import classes from './Sidedrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
const sidedrawer = (props) => {
    let attachedClasses = [classes.Sidedrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.Sidedrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show = {props.open} clicked={() => props.closed()} />
            <div className={attachedClasses.join(' ')}>
                <Logo height="11%" />
                <nav>
                    <Navigationitems />
                </nav>

            </div>
        </Aux>
    );
};

export default sidedrawer;