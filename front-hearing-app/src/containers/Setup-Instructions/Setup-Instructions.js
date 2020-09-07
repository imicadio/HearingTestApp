import React from 'react'
import classes from './Setup-Instructions.css';
import Footer from '../../components/Footer/Footer';
import { useHistory} from 'react-router-dom';

const SetupInstructions = () => {
    const history = useHistory();
    const handleClickBack = () => history.goBack();
    const nextPage = "/"
    const textFooter = "Dalej"

    return (
        <React.Fragment>
            <div className={classes.main}>
                <h2>Przed rozpoczęciem upewnij się, że masz ustawioną głośność na 50%</h2>
            </div>     
            <Footer
                nextPage={nextPage}
                textFooter={textFooter}
                handleClickBack={handleClickBack} />  
        </React.Fragment>
    );
}

export default SetupInstructions;