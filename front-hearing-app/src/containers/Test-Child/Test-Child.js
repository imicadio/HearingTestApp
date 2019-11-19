import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { sounds, forms } from '../../hooks-store/sounds';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Sound from '../../components/Sound/Sound';
import VolumeButton from './../../components/Sound/VolumeButton/VolumeButton';

const TestChild = ({ match, location }) => {
    const {
        params: { id }
    } = match;

    const history = useHistory();
    const headerText = "Za pomocą przycisków + / - ustaw minimalny poziom słyszenia przez ciebie dźwięku";

    // disbledInfo - blokada przycisku "next" w stopce
    const [ disabledInfo, setDisabledInfo ] = useState(forms[id].valid);  

    // Tablica poziomu głośności w dB
    const dB = [-5, 0, 5, 10, 15, 20, 30, 40, 50, 60, 70, 80];     
    
    // stan głośności pliku muzycznego
    const [ count, setCount ] = useState(sounds[id].count);
    
    const [ _play, setPlay ] = useState(true);  

    const [ audio, setAudio ] = useState(new Audio("http://imicadio.com/HearingTestApp/assets/audio/" + sounds[id].id + "Hz/" + sounds[id].id + "_" + dB[count] +".ogg"));
    
    let link = `/test/${sounds[id].link}`;   
    if(sounds[id].link === "Question1") link = `/Questions/${sounds[id].link}`;

    const volumeAdd = () => {
        let _count = count;
        if(count < 11) { 
            setCount(count => count += 1);
            _count += 1;
        }
        // console.log("Wartość count: " + dB[count] + ", wartość _count (aktualny dźwięk): " + dB[_count]);  
        audio.pause();   
        setAudio(audio => new Audio("http://imicadio.com/HearingTestApp/assets/audio/" + sounds[id].id + "Hz/" + sounds[id].id + "_" + dB[_count] +".ogg"));
    };

    const volumeRemove = () => {   
        let _count = count;     
        if(count > 0) {
            setCount(count => count -= 1);
            _count -= 1;
        }
        // console.log("Wartość count: " + dB[count] + ", wartość _count (aktualny dźwięk): " + dB[_count]);  
        audio.pause(); 
        setAudio(audio => new Audio("http://imicadio.com/HearingTestApp/assets/audio/" + sounds[id].id + "Hz/" + sounds[id].id + "_" + dB[_count] +".ogg"));
        // console.log(setAudio);
    };

    const btnClick = () => {        
        setPlay(!_play);
        audio.loop = _play;
        if(_play) audio.play();
        if(!_play) audio.pause();  
        setDisabledInfo(true);  
        forms[id].valid = true;                         
    };  

    useEffect(() => {
        if(!_play){
            audio.play();  
            audio.loop = true;
        } 
    }, [audio]);

    useEffect(() => {        
        setAudio(audio => new Audio("http://imicadio.com/HearingTestApp/assets/audio/" + sounds[id].id + "Hz/" + sounds[id].id + "_" + dB[count] +".ogg"));
        setPlay(true);
        audio.pause();
        setCount(sounds[id].count);
        setDisabledInfo(forms[id].valid);
    }, [id]);
    
    const nextMusic = () => {
        forms[id].value = dB[count];           
        
        if(dB[count]<=30){
            forms[id].count = 1;
        }
        else if (dB[count] > 30 && dB[count] <= 60){
            forms[id].count = 0.5;
        }
        else {
            forms[id].count = 0;
        }
        setCount(sounds[id].count);
        console.log(forms[id]);
        audio.pause();
    }
    
    const backButton = () => {
        if(!_play) audio.pause(); 
        setCount(sounds[id].count);
        history.goBack()
        // console.log("back");
    }

    // console.log(audio);

    return(
        <React.Fragment>
            <div>
                <Header text={headerText} />  
                <Content>                     
                    <Sound 
                        _play={_play}
                        btnClick={btnClick}
                        volumeAdd={volumeAdd}
                        volumeRemove={volumeRemove}
                        aud={audio} 
                    />
                    <VolumeButton
                        volumeAdd={volumeAdd}
                        volumeRemove={volumeRemove}
                    />
                    <h2>Naciśnij "Play" aby odtworzyć dźwięk</h2>
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

export default TestChild;