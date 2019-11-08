import React from 'react';

import classes from './Header.css';

const Header = props => {
    return(
        <div className={classes.header}>
            <h2>{props.text}</h2>
        </div> 
    );
}

export default Header;