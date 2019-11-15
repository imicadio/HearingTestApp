import React, { useState, useCallback, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { sounds, forms } from './../../../hooks-store/sounds';

import Footer from './../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import Content from '../../../components/Content/Content';
import Sound from '../../../components/Sound/Sound';

const TestChild = ({ match, location }) => {
    const {
        params: { id }
    } = match;

    const soundHz = sounds[id].id;

    const history = useHistory();
    const headerText = `Dźwięk ${sounds[id].id}`;

    // Tablica poziomu głośności w dB
    const dB = [-5, 0, 5, 10, 15, 20, 30, 40, 50, 60, 70, 80];
    
    // Forms - formularze do aktualizowania, uzupełnienia
    const [ orderForm, setOrderForm ] = useState(forms);        
    
    // stan głośności pliku muzycznego
    const [ count, setCount ] = useState(11);
    
    const [ _play, setPlay ] = useState(true);  

    const [ audio, setAudio ] = useState(new Audio("http://imicadio.com/HearingTestApp/assets/audio/" + sounds[id].id + "Hz/" + sounds[id].id + "_" + dB[count] +".ogg"));
    
    

    const link = `/test/${sounds[id].link}`;     

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
    };  

    useEffect(() => {
        if(!_play){
            audio.play();  
            audio.loop = true;
        } 
    }, [audio]);

    console.log(audio);

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

export default TestChild;