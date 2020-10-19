import React from 'react';
import classes from './Footer.css';
import Icon from '@material-ui/core/Icon';
import { useHistory } from 'react-router-dom';

const Footer = props => {
    const history = useHistory();
    const handleClick = () => props.locationState ? history.push(props.nextPage, props.locationState) : history.push(props.nextPage);

    let btnFooter;
    switch(props.tmpButton) {
        case 'start':
            btnFooter = (
                <button className={classes.btnFooter} onClick={handleClick}>{props.textFooter}<span className={classes.footer__icon__next}><Icon>keyboard_arrow_right</Icon></span></button>
            );
            break;
        default : 
            btnFooter = (
                <React.Fragment>
                    <button className={classes.btnBack} onClick={props.handleClickBack}><span className={classes.footer__icon__back}><Icon>keyboard_arrow_left</Icon></span>Cofnij</button>
                    <button className={classes.btnFooter__next} onClick={handleClick}>{props.textFooter}<span className={classes.footer__icon__next}><Icon>keyboard_arrow_right</Icon></span></button>
                </React.Fragment>
            );
    }

    return(
        <div className={classes.footer}>
            {btnFooter}
        </div>
    );
}

export default Footer;