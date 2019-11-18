import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Footer.css';

const Footer = props => {   
    
    let validBtn = [classes.button_1]
    if(!props.isValid) validBtn = [classes.button_2];

    let navigation = (
        <div className={classes.footer}>
            <div className={classes.footer_inner}>
                <span className={classes.button}>
                    <Link to={props.link}>
                        <button 
                            className={validBtn}
                            onClick={props.ordered} 
                            type="submit"
                            disabled={!props.isValid}
                        >Sprawdźmy!</button>
                    </Link>                            
                </span>
            </div>
        </div>
    );    

    if(props.link !== "/setupInstructions"){
        navigation = (
            <div className={classes.footer}>
                <div className={classes.footer_inner}>
                    <span onClick={props.backButton} className={classes.button_back}>
                        <i className={classes.left}></i>                            
                    </span>
                    <span className={classes.button}>
                        <Link  
                            to={props.link} 
                            onClick={props.nextMusic}
                        >
                            <button 
                                disabled={!props.isValid}
                                className={validBtn}
                            >Dalej</button>
                        </Link>                            
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