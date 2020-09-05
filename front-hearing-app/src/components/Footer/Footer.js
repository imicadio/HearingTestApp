import React from 'react';
import classes from './Footer.css';
import Icon from '@material-ui/core/Icon';

const Footer = props => {

    let btnFooter = (
        <button className={classes.btnFooter}>Do dzieła!<span className={classes.footer__icon__next}><Icon>keyboard_arrow_right</Icon></span></button>
    );

    return(
        <div className={classes.footer}>
            {btnFooter}
        </div>
    );
}

export default Footer;