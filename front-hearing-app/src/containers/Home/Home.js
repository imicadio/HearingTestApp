import React from 'react';
import classes from './Home.css';
import Footer from '../../components/Footer/Footer';

const Home = () => {

    return(
        <React.Fragment>
            <div className={classes.main}>
                <h2 className={classes.home__h2}>Witamy w teście badania słuchu w trybie online</h2>
                <h3 className={classes.home__h3}>Wykonaj krótki 5 minutowy test słuchu i dowiedz się czy dobrze słyszysz</h3>
            </div>     
            <Footer />  
        </React.Fragment>
    );
}

export default Home;