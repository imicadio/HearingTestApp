import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { sounds, forms } from '../../hooks-store/sounds';

import Modal from '../../components/Modal/Modal';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Sound from '../../components/Sound/Sound';

const TestChild = ({ match, location }) => {
    const {
        params: { id }
    } = match;

    const [ purchasing, setPurchasing ] = useState(false);  

    const history = useHistory();
    let [ headerText, setHeaderText ] = useState("Naciśnij przycisk aby odtworzyć dźwięk.");

    // disbledInfo - blokada przycisku "next" w stopce
    const [ disabledInfo, setDisabledInfo ] = useState(forms[id].valid);  

    // Tablica poziomu głośności w dB
    const dB = [-5, 0, 5, 10, 15, 20, 30, 40, 50, 60, 70, 80];     
    
    // stan głośności pliku muzycznego
    const [ count, setCount ] = useState(sounds[id].count);
    
    const [ _play, setPlay ] = useState(true);  

    const [ audio, setAudio ] = useState(new Audio("http://imicadio.com/HearingTestApp/assets/audio/" + sounds[id].id + "Hz/" + sounds[id].id + "_" + dB[count] +".ogg"));

    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }
    
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
        if(!_play) forms[id].value = dB[_count];
        if(_count === 11) setPurchasing(true);
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
        if(!_play) forms[id].value = dB[_count];
    };

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
        setDisabledInfo(true);  
        forms[id].valid = true;           
        if(forms[id].value == "") forms[id].value = dB[count];
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
        if(forms["home"].value == "") history.push('/');
        setHeaderText("Naciśnij przycisk aby odtworzyć dźwięk.");
    }, [id]);
    
    const nextMusic = () => {       
        
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
        audio.pause();
    }
    
    const backButton = () => {
        if(!_play) audio.pause(); 
        setCount(sounds[id].count);
        history.goBack()
    }

    return(
        <React.Fragment>  
            <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                <h3>Osiągnięto maxymalny poziom głośności. Nie słychać dźwięku?</h3>
                
            </Modal>          
            <Header text={headerText} />  
            <Content true={true}>                     
                <Sound 
                    _play={_play}
                    btnClick={btnClick}
                    volumeAdd={volumeAdd}
                    volumeRemove={volumeRemove}
                    aud={audio} 
                />
            </Content>
            <Footer 
                isValid={disabledInfo}
                nextMusic={nextMusic}
                backButton={backButton}
                history={history}
                link={link}
            />
        </React.Fragment>
    );
}

export default TestChild;