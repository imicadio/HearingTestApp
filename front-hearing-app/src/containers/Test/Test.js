import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { sounds, forms } from './../../hooks-store/sounds';

import Footer from './../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Sound from '../../components/Sound/Sound';
import Answers from '../../components/Answers/Answers';

const Test = () => {

    const history = useHistory();
    let [ headerText, setHeaderText ] = useState("Naciśnij przycisk aby odtworzyć dźwięk.");

    // disbledInfo - blokada przycisku "next" w stopce
    const [ disabledInfo, setDisabledInfo ] = useState(forms["test"].valid);      

    const [ activity, setActivity ] = useState(forms["test"].value);
    
    const [ _play, setPlay ] = useState(true);  
    const [ audio, setAudio ] = useState(new Audio("http://imicadio.com/HearingTestApp/assets/audio/calibrated.ogg"));
    
    const link = '/test/1' ;       

    const btnClick = () => {        
        setPlay(!_play);
        audio.loop = _play;
        if(_play) {
            audio.play();
            setHeaderText("Ustaw minimalny poziom głośności słyszenia dźwięku za pomocą przycisków z głośnikami.");
        }
        if(!_play) {
            audio.pause();  
            setHeaderText("Naciśnij przycisk aby odtworzyć dźwięk.");
        }                            
    };  

    useEffect(() => {
        if(!_play){
            audio.play();  
            audio.loop = true;
        } 
    }, [audio]);    

    const handleChange = event => {
        const { value } = event.target;        
        setDisabledInfo(true);
        forms["test"].valid = true;  
        setActivity(value);
        forms["test"].value = value;   
    }  

    const nextMusic = () => {  
        setAudio("");
        audio.pause();
    }

    const backButton = () => {
        history.goBack();
        audio.pause();
    }   

    useEffect(() => {
        setActivity(forms["test"].value);
        if(forms["home"].value == "") history.push('/');
    }, []);

    return(
        <React.Fragment>
            <div>
                <Header text={headerText} />  
                <Content>                     
                    <Sound 
                        _play={_play}
                        btnClick={btnClick}
                        aud={audio} 
                        volumeDisabled={link}
                    />
                    <Answers>
                        <li>
                            <input 
                                type="radio" 
                                id="radio1" 
                                name="answer" 
                                value="Tak" 
                                onChange={handleChange}
                                checked={activity === "Tak"}
                            />
                            <label for="radio1">Tak</label>
                        </li>
                        <li>
                            <input 
                                type="radio" 
                                id="radio2" 
                                name="answer" 
                                value="Nie" 
                                onChange={handleChange}
                                checked={activity === "Nie"}
                            />
                            <label for="radio2">Nie</label>
                        </li>
                    </Answers>
                </Content>
                <Footer 
                    isValid={disabledInfo}
                    nextMusic={nextMusic}
                    backButton={backButton}
                    history={history}
                    link={link}
                />
            </div>
        </React.Fragment>
    );
}

export default Test;