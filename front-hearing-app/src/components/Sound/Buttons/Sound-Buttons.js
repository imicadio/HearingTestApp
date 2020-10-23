import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import classes from './Sound-Buttons.css';

import IconButton from '@material-ui/core/IconButton';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';

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

const SoundButtons = (props) => { 
    const customMui = useStyles();
    
    // Play button
    let buttons = (
        <IconButton onClick={props.onPlayClick} className={classes.btn__play}><PlayCircleFilledIcon className={customMui.play__icon} /></IconButton>
    );

    if(props.play && (props.link != "/measurement/tone=1")) {
        buttons = (
            <React.Fragment>
                    <IconButton><RemoveCircleIcon className={customMui.remove__icon} /></IconButton>
                    <IconButton onClick={props.onPauseClick} className={classes.btn__pause}><PauseCircleFilledIcon className={customMui.play__icon} /></IconButton>  
                    <IconButton><AddCircleIcon className={customMui.add__icon} /></IconButton>
            </React.Fragment>
        )
    }
    else if(props.play) {
        buttons = (
            <IconButton onClick={props.onPauseClick} className={classes.btn__pause}><PauseCircleFilledIcon className={customMui.play__icon} /></IconButton>
        );
    }

    return(
        <React.Fragment>
            {buttons}
        </React.Fragment>
    );
}

export default SoundButtons;