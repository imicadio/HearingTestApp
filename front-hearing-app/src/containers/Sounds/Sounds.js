import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Sounds.css';
import Footer from '../../components/Footer/Footer';
import { tone, forms } from '../../store/tone';
import Siriwave from "../../components/Weves/Siri-Wave";

// material ui - import
import MobileStepper from '@material-ui/core/MobileStepper';
import HearingIcon from '@material-ui/icons/Hearing';

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

    // configuration wave 
    const [ speed, setSpeed ] = useState(0.03);
    const opt = {
        width: window.innerWidth,
        height: window.innerHeight * 0.3,
        cover: true,
        speed: speed,
        amplitude: 0.2,
        frequency: 2,
        color: "#3794ff"
    };   
    
    const history = useHistory();
    let [text, setText] = useState("Naciśnij przycisk 'play', aby odtworzyć dźwięk");  
    let locationState = { state: location.state.state + 1 };  
        
    const [ count, setCount ] = useState(tone[location.state.state].count);

    // Footer 
    const textFooter = "Dalej"
    const [ nextPage, setNextPage ] = useState("/measurement/" + tone[location.state.state].link);
    
    // Table sound level in dB
    const dB = [-5, 0, 5, 10, 15, 20, 30, 40, 50, 60, 70, 80];  
    
    // Play / Pause button show
    const [play, setPlay] = useState(false);
    
    // Stepper level
    const [activeStep, setActiveStep] = useState(0);
    
    let [ audio, setAudio ] = useState()
    
    // Show pause button 
    const onPlayClick = () => { 
        // console.log(location.state.state) 
        play ? setPlay(false) : setPlay(true); 
        audio.loop = !play;
        audio.play();
        history.location.pathname === "/measurement/tone=1" ? 
            setText("Czy słyszysz dźwięk?") : 
            setText("Za pomocą przycisków - i + wyreguluj głośność tak, żeby usłyszeć najcichszy dźwięk"); 
    }
    
    // Show play button 
    const onPauseClick = () => {
        play ? setPlay(false) : setPlay(true); 
        audio.loop = !play;
        audio.pause();
        setText("Naciśnij przycisk 'play', aby odtworzyć dźwięk");
    }
    
    // Podgłoszenie
    const turnUp = () => {
        let tmpCount = count;        
        if(count < dB.length - 1){
            setSpeed(speed => speed += .01)
            setCount(count => count += 1); 
            tmpCount += 1;
        }
        audio.pause();
        setAudio(new Audio("https://okrabygg.se/audio/" + tone[location.state.state].id + "Hz/" + tone[location.state.state].id + "_" + dB[tmpCount] + ".ogg"));
    }
    
    const turnDown = () => {
        let tmpCount = count;
        if(count > 0){
            setCount(count => count -= 1); 
            tmpCount -= 1;
        }
        audio.pause();
        setAudio(new Audio("https://okrabygg.se/audio/" + tone[location.state.state].id + "Hz/" + tone[location.state.state].id + "_" + dB[tmpCount] + ".ogg"));
    }

    const handleClickNext = () => {
        //console.error(location.state.state)
        if(dB[count]<=30){
            forms[location.state.state].count = 1;
        }
        else if (dB[count] > 30 && dB[count] <= 60){
            forms[location.state.state].count = 0.5;
        }
        else {
            forms[location.state.state].count = 0;
        }

    }

    const handleClickBack = () => { 
        history.goBack(); 
    };
    
    useEffect(() => {
        if(play) {
            audio.loop = play;
            audio.play();
        }
        // console.log("Audio test: ", audio)
    }, [audio]);

    useEffect(() => {       
        console.log(forms)
        setActiveStep(location.state.state - 1)
        tone[location.state.state].link === "question=1" ? setNextPage("/questions/" + tone[location.state.state].link) : setNextPage("/measurement/" + tone[location.state.state].link)
        if(play) onPauseClick();   
        setCount(tone[location.state.state].count);      
        history.location.pathname === "/measurement/tone=1" ? 
            setAudio(new Audio("https://okrabygg.se/audio/calibrated.ogg")) : 
            setAudio(new Audio("https://okrabygg.se/audio/" + tone[location.state.state].id + "Hz/" + tone[location.state.state].id + "_" + dB[tone[location.state.state].count] + ".ogg"));
    }, [locationState.state]);


    return(
        <React.Fragment>
            <MobileStepper
                variant="dots"
                steps={7}
                position="static"
                activeStep={activeStep}                    
            />
            { play ?                 
                <div className={classes.div__waves}>
                    <Siriwave style={siriwaveStyle} opt={opt} />
                </div> : 
                null
            }
            <div className={classes.main}>
                <h3 className={classes.sound__text}>{text}</h3>                
                <div className={classes.sounds__buttons}>
                    <SoundButtons
                        play={play}
                        onPauseClick={onPauseClick}
                        onPlayClick={onPlayClick} 
                        turnUp={turnUp}
                        turnDown={turnDown}
                        id={location.state.state}
                        link={history.location.pathname} />
                </div>  
                <br />               
                { Number.isInteger(tone[location.state.state].id) ? <h4><React.Fragment><HearingIcon fontSize="small" style={{marginRight: 5}} />  { tone[location.state.state].id } Hz  </React.Fragment></h4> : null  }
            </div>
            <Footer
                disabled={!play}
                nextPage={nextPage}
                textFooter={textFooter}
                locationState={locationState}
                handleClickBack={handleClickBack}
                handleClickNext={handleClickNext}
                soundsFooter={true} />
        </React.Fragment>
    );
}

export default Sounds;