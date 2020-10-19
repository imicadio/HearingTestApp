import React from 'react';
import { useHistory} from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import classes from './Not-Found.css'

const NotFound = () => {
    const history = useHistory();
    const handleClickBack = () => history.goBack();
    const nextPage = "/"
    const textFooter = "Powrót na stronę główną"

    return(
        <React.Fragment>
            <div className={classes.main}>
                <h1>Error 404 not found</h1>
            </div>
            <Footer
                nextPage={nextPage}
                textFooter={textFooter}
                handleClickBack={handleClickBack} />
        </React.Fragment>
    );
}

export default NotFound;