import React from 'react';
import classes from './Header.css'
import { useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    
    const handleClick = () => {        
        history.push('/')
    }    

    return(
        <div className={classes.header}>
            <div className={classes.menu}>
                <a href="#" onClick={handleClick} >
                    <img className={classes.logo} src="http://okrabygg.se/wp-content/uploads/2020/09/hearingLogo.png" alt="logo" />
                    <h2>Auzoor</h2>
                </a>
                <a href="https://www.instagram.com/imicadio/" target="_blank">
                    <img src="https://okrabygg.se/wp-content/uploads/2020/12/instagram-logo.png" alt="instagram Michał Jeszko" />
                    <p>Instagram</p>
                </a>
            </div>
        </div>
    );
}

export default Header;