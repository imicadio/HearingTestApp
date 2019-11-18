import React, { useState, useEffect } from 'react';
import { sounds, forms } from '../../hooks-store/sounds';
import {useHistory} from 'react-router-dom';

import Footer from './../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Answers from '../../components/Answers/Answers';


const Quiz = ({ match }) => {
    const {
        params: { id }
    } = match;

    console.log(id);

    const history = useHistory();

    const headerText = sounds[id].question;
    const link = `/Questions/${sounds[id].link}`;   
    
    const [ disabledInfo, setDisabledInfo ] = useState(forms[id].valid);
    
    const [ form, setForm ] = useState({
        id: id,
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
    }     
    
    const handleSubmit = event => {
        console.log("Submitted succesfully");               
        submit();
    }  

    const submit = () => {
        forms[form.id].value = form.answer;      
        forms[form.id].valid = true; 
    }

    const backButton = () => {
        history.goBack()
    }
    console.log(forms);

    useEffect(() => {
        setForm({ id: id });
        setDisabledInfo(forms[id].valid);
    }, [id]);

    return(
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <Header text={headerText} />  
                <Content>
                    <Answers>
                        <li>
                            <input 
                                type="radio" 
                                id="radio1" 
                                name="answer" 
                                value="Tak" 
                                onChange={handleChange}
                            />
                            <label for="radio1">Tak</label>
                        </li>
                        <li>
                            <input 
                                type="radio" 
                                id="radio2" 
                                name="answer" 
                                value="Nie wiem" 
                                onChange={handleChange}
                            />
                            <label for="radio2">Nie wiem</label>
                        </li>
                        <li>
                            <input 
                                type="radio" 
                                id="radio3" 
                                name="answer" 
                                value="Nie" 
                                onChange={handleChange}
                            />
                            <label for="radio3">Nie</label>
                        </li>
                    </Answers>
                </Content>
                <Footer  
                    isValid={disabledInfo}
                    nextMusic={handleSubmit}
                    backButton={backButton}
                    link={link}
                />
            </form>
        </React.Fragment>
    );
}

export default Quiz;