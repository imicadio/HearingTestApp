import React from 'react'
import classes from './Sound.css';
import VolumeButton from './VolumeButton/VolumeButton';

const Sound = props => {
    
    let classesButton=[classes.play];     
    if(!props._play) {
        classesButton.push(classes.paused);        
    }      

    let button = (
        <button 
            onClick={props.btnClick} 
            className={classesButton.join(' ')}
        ></button> 
    );

    return(
        <React.Fragment>
            {button}
        </React.Fragment>
    );
}

export default Sound;