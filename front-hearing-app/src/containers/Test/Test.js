import React, { useState, useCallback } from 'react';
import {useHistory} from 'react-router-dom';

import Footer from './../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Sound from '../../components/Sound/Sound';

const Test = () => {
    const history = useHistory();
    const headerText = "Czy słyszysz dźwięk?";
    const link = "";
    const dB = [-5, 0, 5, 10, 15, 20, 30, 40, 50, 60, 70, 80];
    let count = 11; 

    const [ audio, setAudio ] = useState(new Audio("http://imicadio.com/HearingTestApp/assets/audio/250Hz/250_"+ dB[count] +".ogg"));

    const volumeAdd = useCallback(() => {
        if(count < 11) count += 1;                
        console.log("Wartość count: " + dB[count]);     
        setAudio(new Audio("http://imicadio.com/HearingTestApp/assets/audio/250Hz/250_"+ dB[count] +".ogg"));
    }, [setAudio])

    const volumeRemove = useCallback(() => {
        if(count > 0) count -= 1;        
        console.log("Wartość count: " + dB[count]);     
        setAudio(new Audio("http://imicadio.com/HearingTestApp/assets/audio/250Hz/250_"+ dB[count] +".ogg"));     
    }, [setAudio]);

    return(
        <React.Fragment>
            <div>
                <Header text={headerText} />  
                <Content>                     
                    <Sound 
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

export default Test;