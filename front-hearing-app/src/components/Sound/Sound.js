import React from 'react'
import classes from './Sound.css';
import VolumeButton from './VolumeButton/VolumeButton';

const Sound = props => {

    let button = (
        <button 
            onClick={props.btnClick} 
            className={classes.volumeBtn_play}
        ><i class="fa fa-play-circle"></i></button> 
    );
  
    if(!props._play && (props.volumeDisabled != '/test/1')) {         
        button = (
            <React.Fragment>
                <VolumeButton 
                    _play={props._play} 
                    volume={props.volumeRemove} 
                ><i class="fa fa-volume-down"></i></VolumeButton>
                <button 
                    onClick={props.btnClick} 
                    className={classes.volumeBtn_play}
                ><i class="fa fa-pause-circle"></i></button> 
                <VolumeButton 
                    _play={props._play} 
                    volume={props.volumeAdd} 
                ><i class="fa fa-volume-up"></i></VolumeButton>
            </React.Fragment>
        );    
    }  
    else if(!props._play){
        button = (
            <button 
                onClick={props.btnClick} 
                className={classes.volumeBtn_play}
            ><i class="fa fa-pause-circle"></i></button> 
        );
    }
      

    return(
        <React.Fragment>
            <div className={classes.boxSounds}>                
                {button}   
            </div>
        </React.Fragment>
    );
}

export default Sound;