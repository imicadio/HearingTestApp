import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Sounds.css';
import Footer from '../../components/Footer/Footer';
import { tone, forms } from '../../store/tone';
import Siriwave from "../../components/Weves/Siri-Wave";

// material ui - import
import { makeStyles } from "@material-ui/core/styles";
import MobileStepper from '@material-ui/core/MobileStepper';
import IconButton from '@material-ui/core/IconButton';

// import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    //background: "#666",
    height: "auto",
    width: "100%",
    position: "absolute",
    top: "65vh"
};

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

const useStyles = makeStyles((theme) => ({
    play__icon: {    
        fontSize: 150,
        color: "#8bbc07",
        '&:hover': {
            color: "#fff",
        },
        [theme.breakpoints.down("sm")]: { 
            fontSize: 100
        },
        [theme.breakpoints.down("xs")]: { 
            fontSize: 100
        }         
    },
    add__icon: {
        fontSize: 60,
        color: "#8bbc07",
        [theme.breakpoints.down("sm")]: { 
            fontSize: 45
        },
        [theme.breakpoints.down("xs")]: { 
            fontSize: 40
        }  
    },
    remove__icon: {
        fontSize: 60,
        color: "#8bbc07",
        [theme.breakpoints.down("sm")]: { 
            fontSize: 45
        },
        [theme.breakpoints.down("xs")]: { 
            fontSize: 40
        }  
    }
    
}));

const Sounds = ({match, location}) => { 
    const {
        params: {id}
    } = match;

    const opt = {
        width: window.innerWidth,
        height: window.innerHeight * 0.3,
        cover: true,
        speed: 0.03,
        amplitude: 0.7,
        frequency: 2,
        color: "#3794ff"
    };
    
    const customMui = useStyles();
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
                <div style={styles}>
                    <Siriwave style={siriwaveStyle} opt={opt} />
                </div>
            }
            <div className={classes.main}>
                <h3 className={classes.sound__text}>{text}</h3>
                <div className={classes.sounds__buttons}>
                    { !play ? 
                        <IconButton onClick={onPlayClick} className={classes.btn__play}><PlayCircleFilledIcon className={customMui.play__icon} /></IconButton> :
                        <React.Fragment>
                            <IconButton><RemoveCircleIcon className={customMui.remove__icon} /></IconButton>
                            <IconButton onClick={onPauseClick} className={classes.btn__pause}><PauseCircleFilledIcon className={customMui.play__icon} /></IconButton>  
                            <IconButton><AddCircleIcon className={customMui.add__icon} /></IconButton>
                        </React.Fragment>
                    }
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