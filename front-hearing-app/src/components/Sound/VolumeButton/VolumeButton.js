import React from 'react';
import classes from './VolumeButton.css';

const VolumeButton = props => {

    let volume = (
        <div 
            className={classes.volumeHide} 
            onClick={props.volume}
        >{props.children}</div> 
    );

    if(!props._play) {  

        volume = (
            <div 
                className={classes.volumeBtn} 
                onClick={props.volume}
            >{props.children}</div> 
        );
    }

    return(
        <React.Fragment>
            {volume}
        </React.Fragment>
    );
}

export default VolumeButton;