import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Footer.css';

const Footer = props => {
    return(
        <div className={classes.footer}>
            <div className={classes.footer_inner}>
                <span className={classes.button}>
                    <NavLink to={props.link}>
                        <button>Sprawdźmy!</button>
                    </NavLink>                            
                </span>
            </div>
        </div>
    );
}

export default Footer;