import React from 'react';
import classes from './Header.css'

const Header = () => {
    return(
        <div className={classes.header}>
            <div className={classes.menu}>
                <img className={classes.logo} src="http://okrabygg.se/wp-content/uploads/2020/09/hearingLogo.png" alt="logo" />
                <h2>Auzoor</h2>
            </div>
        </div>
    );
}

export default Header;