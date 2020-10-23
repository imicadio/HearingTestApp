import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Sounds.css';
import Footer from '../../components/Footer/Footer';
import { tone, forms } from '../../store/tone';
import Siriwave from "../../components/Weves/Siri-Wave";

// material ui - import
import MobileStepper from '@material-ui/core/MobileStepper';

import SoundButtons from '../../components/Sound/Buttons/Sound-Buttons';

const siriwaveStyle = {
    display: "block",
    width: "100%",
    height: "100%",
    position: "absolute",
    left: "0",
    top: "50%",
    bottom: "50%",
    opacity: "0.8",
    userSelect: "none",
    cursor: "pointer"
};

const Sounds = ({match, location}) => { 
    const {
        params: {id}
    } = match;

    const opt = {
        width: window.innerWidth,
        height: window.innerHeight * 0.3,
        cover: true,
        speed: 0.03,
        amplitude: 0.2,
        frequency: 2,
        color: "#3794ff"
    };   
    
    const history = useHistory();
    let [text, setText] = useState("Naciśnij przycisk 'play', aby odtworzyć dźwięk");  
    let locationState = { state: location.state.state + 1 };    

    // Footer 
    const textFooter = "Dalej"
    let nextPage = "/measurement/" + tone[location.state.state].link;
    const handleClickBack = () => history.goBack();

    // Table sound level in dB
    const dB = [-5, 0, 5, 10, 15, 20, 30, 40, 50, 60, 70, 80];  

    // Play / Pause button show
    const [play, setPlay] = useState(false);

    // Stepper level
    const [activeStep, setActiveStep] = useState(0);

    // Show pause button 
    const onPlayClick = () => { 
        play ? setPlay(false) : setPlay(true); 
        setText("Ustaw minimalny poziom słyszenia dźwięku");
    }

    // Show play button 
    const onPauseClick = () => { 
        play ? setPlay(false) : setPlay(true); 
        setText("Naciśnij przycisk 'play', aby odtworzyć dźwięk");
    }

    useEffect(() => {
        console.log(history.location.pathname)
    }, [])


    return(
        <React.Fragment>
            <MobileStepper
                variant="dots"
                steps={7}
                position="static"
                activeStep={activeStep}                    
            />
            { !play ? 
                null :
                <div className={classes.div__waves}>
                    <Siriwave style={siriwaveStyle} opt={opt} />
                </div>
            }
            <div className={classes.main}>
                <h3 className={classes.sound__text}>{text}</h3>
                <div className={classes.sounds__buttons}>
                    <SoundButtons
                        play={play}
                        onPauseClick={onPauseClick}
                        onPlayClick={onPlayClick} 
                        link={history.location.pathname} />
                </div>                
            </div>
            <Footer
                nextPage={nextPage}
                textFooter={textFooter}
                locationState={locationState}
                handleClickBack={handleClickBack} />
        </React.Fragment>
    );
}

export default Sounds;