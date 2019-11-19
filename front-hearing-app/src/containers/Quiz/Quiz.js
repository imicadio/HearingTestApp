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

    // console.log(id);

    const history = useHistory();

    const headerText = sounds[id].question;
    let link = `/Questions/${sounds[id].link}`;  
    if (sounds[id].link == "Summary") link = "/Summary"
    
    const [ disabledInfo, setDisabledInfo ] = useState(forms[id].valid);

    const [ activity, setActivity ] = useState(forms[id].value);
    
    const [ form, setForm ] = useState({
        id: id,
        answer: ""
    });    
    
    const handleChange = event => {
        const { name, value } = event.target;
        // console.log(value);    
        // event.preventDefault();    
        setForm({
            ...form,
            [name]: value
        });           
        setDisabledInfo(true);
        setActivity(value);
    }     
    
    const handleSubmit = event => {        
        console.log("Submitted succesfully");   
        setActivity();
        submit();        
    }  

    const submit = () => {
        forms[form.id].value = form.answer;      
        forms[form.id].valid = true; 
        switch(form.answer){
            case("Tak"):
                forms[form.id].count = 0;
                break;
            case("Nie"):
                forms[form.id].count = 1;
                break;
            default:
                forms[form.id].count = 0.5;
        }

        console.log(forms[form.id]);
    }

    const backButton = () => {
        history.goBack()
    }
    // console.log(forms);

    useEffect(() => {
        setForm({ id: id });
        setDisabledInfo(forms[id].valid);    
        setActivity(forms[id].value);
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
                                checked={activity === "Tak"}
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
                                checked={activity == "Nie wiem"}
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
                                checked={activity == "Nie"}
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