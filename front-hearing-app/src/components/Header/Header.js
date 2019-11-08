import React from 'react';
import classes from './Header.css';

const Header = () => {
    return(
        <div className={classes.header}>
            <div className={classes.menu}>
                <div >Aug 14, 2016</div>
                <div>Sign Up</div>      
                <div>Login</div>         
            </div>
        </div>
    );
}

export default Header; 