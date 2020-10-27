import React, {useState} from 'react'
import classes from './Setup-Instructions.css';
import Footer from '../../components/Footer/Footer';
import ModalSetup from './Modal/Modal';
import { useHistory} from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";

import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import HeadsetIcon from '@material-ui/icons/Headset';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const useStyles = makeStyles((theme) => ({
    setup__icon: {    
        fontSize: 60,
        [theme.breakpoints.down("sm")]: { 
            fontSize: 60
        },
        [theme.breakpoints.down("xs")]: { 
            fontSize: 30,
            margin: 15
        }         
        },        
    }
));

const SetupInstructions = () => {
    const customMui = useStyles();
    const history = useHistory();
    const handleClickBack = () => history.goBack();
    const nextPage = "/measurement/tone=1";
    const textFooter = "Dalej";
    const locationState = { state: 1 };

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
                <h2>Przed rozpoczęciem:</h2>
                <br/>
                <div className={classes.boxes}>
                    <div className={classes.box}>
                        <VolumeOffIcon className={classes.box__icon} className={customMui.setup__icon} />
                        <p>Upewnij się, że przebywasz w cichym pomieszczeniu</p>
                    </div>
                    <div className={classes.box}>
                        <HeadsetIcon className={classes.box__icon} className={customMui.setup__icon} />
                        <p>Jeśli możesz załóż słuchawki</p>
                    </div>
                    <div className={classes.box}>
                        <EqualizerIcon className={classes.box__icon} className={customMui.setup__icon} />
                        <p>Ustaw głośność na 50% <br /> Nie wiesz jak ustawić głośność na 50%? <a href="javascript:;" onClick={handleOpen}>Kliknij tutaj</a></p>
                    </div>
                </div>
            </div>     
            <Footer
                nextPage={nextPage}
                textFooter={textFooter}
                locationState={locationState}
                handleClickBack={handleClickBack} />
            <ModalSetup
                openModal={open}
                closeModal={handleClose} />
        </React.Fragment>
    );
}

export default SetupInstructions;