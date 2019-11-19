import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { sounds, forms } from './../../hooks-store/sounds';

import Footer from './../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Sound from '../../components/Sound/Sound';
import Answers from '../../components/Answers/Answers';

const Test = props => {

    const history = useHistory();
    const headerText = "Czy słyszysz dźwięk?";

    // disbledInfo - blokada przycisku "next" w stopce
    const [ disabledInfo, setDisabledInfo ] = useState(forms["test"].valid);      

    const [ activity, setActivity ] = useState(forms["test"].value);
    
    const [ _play, setPlay ] = useState(true);  
    const [ audio, setAudio ] = useState(new Audio("http://imicadio.com/HearingTestApp/assets/audio/calibrated.ogg"));
    
    const link = `/test/${1}` ;      

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
    
    const [ form, setForm ] = useState({
        id: "test",
        answer: ""
    });

    const handleChange = event => {
        const { name, value } = event.target;
        console.log(value);        
        setForm({
            ...form,
            [name]: value
        });           
        setDisabledInfo(true);
        forms["test"].valid = true;  
        setActivity(value);
    }     
    
    const handleSubmit = event => {
        console.log("Submitted succesfully");               
        submit();
    }  
    
    const submit = () => {
        forms[form.id].value = form.answer;       
    }

    const nextMusic = () => {
        submit();
        // console.log(forms);  
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

    // console.log(audio);

    return(
        <React.Fragment>
            <div>
                <Header text={headerText} />  
                <Content>                     
                    <Sound 
                        _play={_play}
                        btnClick={btnClick}
                        aud={audio} 
                    />
                    <h2>Naciśnij "Play" aby odtworzyć dźwięk</h2>
                    <div>
                        <h3>Czy słyszysz dźwięk?</h3>
                    </div>
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