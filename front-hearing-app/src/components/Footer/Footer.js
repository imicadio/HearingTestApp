import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Footer.css';

const Footer = props => {       

    let navigation = (
        <div className={classes.footer}>
            <div className={classes.footer_inner}>
                <span className={classes.button}>
                    <NavLink to={props.link}>
                        <button 
                            onClick={props.ordered} 
                            type="submit"
                            disabled={!props.disabled}
                        >Sprawdźmy!</button>
                    </NavLink>                            
                </span>
            </div>
        </div>
    );

    if(props.link !== "/setupInstructions"){
        navigation = (
            <div className={classes.footer}>
                <div className={classes.footer_inner}>
                    <span className={classes.button_back} onClick={() => props.history.goBack()}>
                        <i className={classes.left}></i>                            
                    </span>
                    <span className={classes.button}>
                        <NavLink to={props.link}>
                            <button>Dalej</button>
                        </NavLink>                            
                    </span>
                </div>
            </div>            
        );
    }

    return(
        <React.Fragment>
            {navigation}
        </React.Fragment>
    );
}

export default Footer;