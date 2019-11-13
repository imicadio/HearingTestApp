import React, { useState, useEffect } from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import classes from "./Test.css";

import Footer from './../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';

const Test = () => {
    const [ _play, setPlay ] = useState(true);
    const history = useHistory();
    const headerText = "Czy słyszysz dźwięk?";
    const link = "";
    var aud = new Audio("http://imicadio.com/HearingTestApp/assets/audio/250Hz/250_80.ogg"); 
    
    let classesButton=[classes.play];     
    if(!_play) {
        classesButton.push(classes.paused);        
    } 

    const btnClick = () => {        

        // sound end
        if(!_play) {     
            setPlay(true);   
            aud.loop = false;
            console.log("1 " + _play);                  
        }

        // sound start
        if(_play){
            setPlay(false); 
            aud.loop = true;
            aud.play();
            console.log("2 " + _play);
        }                       
    }

    
    const playSound = () => {
        console.log("kliknięto");        
    }

    let button = (
        <button 
            onClick={btnClick} 
            className={classesButton.join(' ')}
        ></button>
    );     

    // useEffect(() => {    
               
    // }, [setPlay]);

    return(
        <React.Fragment>
            <div>
                <Header text={headerText} />  
                <Content>                     
                    {button}
                    <h2>Naciśnij "Play" aby odtworzyć dźwięk</h2>
                </Content>
                <Footer 
                    history={history}
                    link={link}
                />
            </div>
        </React.Fragment>
    );
}

export default Test;