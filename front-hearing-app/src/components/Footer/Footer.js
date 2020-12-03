import React from 'react';
import classes from './Footer.css';
import Icon from '@material-ui/core/Icon';
import { useHistory } from 'react-router-dom';
import { reloadPage } from '../../store/tone';

const Footer = props => {
    const history = useHistory();
    const handleClick = () => { 
        props.locationState ? history.push(props.nextPage, props.locationState) : history.push(props.nextPage); 
        if(props.tmpButton === 'start')
            reloadPage[1] = 'No'            
    }

    let btnFooter;
    switch(props.tmpButton) {
        case 'start':
            btnFooter = (
                <button className={classes.btnFooter} onClick={handleClick}>{props.textFooter}<span className={classes.footer__icon__next}><Icon>keyboard_arrow_right</Icon></span></button>
            );
            break;
        case '/measurement/tone=1':
            btnFooter = (
                <React.Fragment>
                    <button className={classes.btnBack} onClick={props.handleClickBack}><span className={classes.footer__icon__back}><Icon>keyboard_arrow_left</Icon></span><p>Cofnij</p></button>
                    <button 
                    disabled={props.selecting} 
                    className={classes.btnFooter__next} 
                    onClick={props.handleClickNext(), handleClick}>
                        {props.textFooter}
                        <span className={classes.footer__icon__next}>
                            <Icon>keyboard_arrow_right</Icon>
                        </span>
                    </button>
                </React.Fragment>
            );
            break;
        default : 
            btnFooter = (
                <React.Fragment>
                    <button className={classes.btnBack} onClick={props.handleClickBack}><span className={classes.footer__icon__back}><Icon>keyboard_arrow_left</Icon></span><p>Cofnij</p></button>
                    {
                        props.soundsFooter ? 
                        <button 
                        disabled={props.disabled} 
                        className={classes.btnFooter__next} 
                        onClick={props.handleClickNext(), handleClick}>
                            {props.textFooter}
                            <span className={classes.footer__icon__next}>
                                <Icon>keyboard_arrow_right</Icon>
                            </span>
                        </button> : 
                        <button 
                        disabled={props.disabled} 
                        className={classes.btnFooter__next} 
                        onClick={handleClick}>
                            {props.textFooter}
                            <span className={classes.footer__icon__next}>
                                <Icon>keyboard_arrow_right</Icon>
                            </span>
                        </button>
                    }
                    
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