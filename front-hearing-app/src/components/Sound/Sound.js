import React, {useState} from 'react'
import classes from './Sound.css';

const Sound = props => {
    const [ _play, setPlay ] = useState(true);    

    let classesButton=[classes.play];     
    if(!_play) {
        classesButton.push(classes.paused);        
    } 

    const btnClick = () => {        
        // sound end
        if(!_play) {     
            setPlay(true);   
            props.aud.loop = false;
            props.aud.pause();
            console.log("1 " + _play);                  
        }

        // sound start
        if(_play){
            setPlay(false); 
            props.aud.loop = true;
            props.aud.play();
            console.log("2 " + _play);
        }                            
    };    

    return(
        <React.Fragment>
            <button 
                onClick={btnClick} 
                className={classesButton.join(' ')}
            ></button>
            <h2>Naciśnij "Play" aby odtworzyć dźwięk</h2>
        </React.Fragment>
    );
}

export default Sound;