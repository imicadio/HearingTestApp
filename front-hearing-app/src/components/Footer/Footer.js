import React from 'react';
import classes from './Footer.css';

const Footer = props => {

    let btnFooter = (
        <button className={classes.btnFooter}>Do dzieła!<span className={classes.iconNext}></span></button>
    );

    return(
        <div className={classes.footer}>
            {btnFooter}
        </div>
    );
}

export default Footer;