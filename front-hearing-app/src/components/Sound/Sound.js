import React from 'react'
import classes from './Sound.css';

const Sound = props => {
    
    let button = (
        <button 
            onClick={props.btnClick} 
            className={classes.volumeBtn_play}
        ><i class="fa fa-play-circle"></i></button> 
    );

    if(!props._play) {  
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
                <div 
                    className={classes.volumeBtn} 
                    onClick={props.volumeRemove}
                ><i class="fa fa-volume-down"></i></div>                
                {button}                
                <div 
                    className={classes.volumeBtn} 
                    onClick={props.volumeAdd}
                ><i class="fa fa-volume-up"></i></div>
            </div>
        </React.Fragment>
    );
}

export default Sound;