import React, { useState } from 'react';
import store, { useStore } from '../../hooks-store/store';

import Footer from './../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Answers from '../../components/Answers/Answers';

import './Home.css'
import img from "./../../assets/images/hearing-01.svg";

const Home = () => {
    const state = useStore()[0];
    
    const headerText = "5 minutowy test słuchu";
    const link = "/setupInstructions";

    const [ form, setForm ] = useState({
        id: "home",
        answer: ""
    });

    const handleChange = event => {
        const { name, value } = event.target;
        console.log(value);
        setForm({
            ...form,
            [name]: value
        });       
    }     
    
    const handleSubmit = event => {
        console.log("Submitted succesfully");
        submit();
    }  

    const submit = () => {
        console.log(form);
    }

    return(
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <Header text={headerText} />  
                <Content>
                    <img src={img} alt="Ubytek słuchu" />
                    <h2>Czy uważasz, że masz problem ze słuchem?</h2>
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
                    ordered={submit}                
                    link={link}
                />
            </form>
        </React.Fragment>
    );
}

export default Home;