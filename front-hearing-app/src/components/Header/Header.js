import React from 'react';
import classes from './Header.css'

const Header = () => {
    return(
        <div className={classes.header}>
            <div className={classes.menu}>
                <img className={classes.logo} src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/117594263_636997997194015_5924515502375637296_n.png?_nc_cat=104&_nc_sid=b96e70&_nc_ohc=z1rGpJSO6ZgAX86YJAh&_nc_ht=scontent-waw1-1.xx&oh=3fea8adecf90636db15e73e3bd8d9fd4&oe=5F5A5520" alt="logo" />
                <h2>Auzoor</h2>
            </div>
        </div>
    );
}

export default Header;