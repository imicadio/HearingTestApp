import React, {useState} from 'react'
import classes from './Setup-Instructions.css';
import Footer from '../../components/Footer/Footer';
import ModalSetup from './Modal/Modal';
import { useHistory} from 'react-router-dom';

const SetupInstructions = () => {
    const history = useHistory();
    const handleClickBack = () => history.goBack();
    const nextPage = "/"
    const textFooter = "Dalej"

    //OpenDialog
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        console.log('Open modal')
        setOpen(true);
    }

    const handleClose = () => {
        console.log('Close modal')
        setOpen(false);
    }

    return (
        <React.Fragment>
            <div className={classes.main}>
                <h2>Przed rozpoczęciem upewnij się, że masz ustawioną głośność na 50%</h2>
                <br/>
                <h3>Nie wiesz jak ustawić głośność na 50%? <a href="javascript:;" onClick={handleOpen}>Kliknij tutaj</a></h3>
            </div>     
            <Footer
                nextPage={nextPage}
                textFooter={textFooter}
                handleClickBack={handleClickBack} />
            <ModalSetup
                openModal={open}
                closeModal={handleClose} />
        </React.Fragment>
    );
}

export default SetupInstructions;