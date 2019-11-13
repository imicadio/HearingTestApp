import React, {useState} from 'react'
import classes from './Sound.css';
import VolumeButton from '../VolumeButton/VolumeButton';

const Sound = props => {
    console.log(props.aud);
    const [ _play, setPlay ] = useState(true);    

    let classesButton=[classes.play];     
    if(!_play) {
        classesButton.push(classes.paused);        
    } 

    const btnClick = () => {        
        setPlay(!_play);
        props.aud.loop = _play;
        if(_play) props.aud.play();
        if(!_play) props.aud.pause();                         
    };    

    let button = (
        <button 
            onClick={btnClick} 
            className={classesButton.join(' ')}
        ></button> 
    );

    return(
        <React.Fragment>
            {button}
            <VolumeButton
                volumeAdd={props.volumeAdd}
                volumeRemove={props.volumeRemove}
            />
        </React.Fragment>
    );
}

export default Sound;