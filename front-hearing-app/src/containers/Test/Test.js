import React, { useState, useEffect } from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import classes from "./Test.css";

import Footer from './../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';

const Test = () => {
    const [ play, setPlay ] = useState(true);
    const history = useHistory();
    const headerText = "Czy słyszysz dźwięk?";
    const link = "";

    let classesButton=[classes.play];     
    if(!play) {
        classesButton.push(classes.paused);
    }

    const btnClick = () => {
        if(!play) {            
            setPlay(true);                  
        }
        if(play){
            setPlay(false);            
        }                       
    }

    let button = (
        <button 
            onClick={btnClick} 
            className={classesButton.join(' ')}
        ></button>
    );
    
    // useEffect(() => {        
    //     console.log(play);
    // }, [play]);

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