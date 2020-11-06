import React from 'react';
import classes from './Summary.css'
import Footer from '../../components/Footer/Footer';

const Summary = () => {
    const nextPage = "/";
    const textFooter = "Powrót na stronę główną";
    return(
        <React.Fragment>
            <div className={classes.main}>
                <h2>Podsumowanie</h2>
                
            </div>     
            <Footer
                nextPage={nextPage}
                textFooter={textFooter}
                tmpButton={"start"} />  
        </React.Fragment>
    );
}

export default Summary;