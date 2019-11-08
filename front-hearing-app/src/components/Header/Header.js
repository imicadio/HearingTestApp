import React from 'react';
import classes from './Header.css';

const Header = () => {
    return(
        <div className={classes.header}>
            <div className={classes.menu}>                
                <div>Michał Jeszko</div>      
                <div>Login</div>         
            </div>
        </div>
    );
}

export default Header; 