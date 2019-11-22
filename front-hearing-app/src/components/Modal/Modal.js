import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Modal.css';
import Aux from '../../hoc/_Aux/_Aux';
import Backdrop from './Backdrop/Backdrop';

const modal = props => {
    
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
                <div className={classes.modalButtons}>
                    <button className={[classes.Button, classes.Danger].join(' ')} onClick={props.modalClosed}>Powrót</button>
                    <Link to={props.link}><button className={[classes.Button, classes.Success].join(' ')} onClick={props.nextMusic}>Nie słychać dźwięku</button></Link>
                </div>
            </div>
        </Aux>
    )
}

export default React.memo(modal, (prevProps, nextProps) => nextProps.show === prevProps.show && nextProps.children === prevProps.children);

// React.memo() reaguje wtedy gdy zmieni się rekwizyt elemntu, wcześniej była logika 