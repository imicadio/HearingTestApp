import React, { useEffect, useState } from 'react';
import { useHistory} from 'react-router-dom';
import classes from './Questions.css';
import Footer from '../../components/Footer/Footer';
import { tone, forms } from '../../store/tone';

const Questions = ({match, location}) => {
    const {
        params: {id}
    } = match;

    const history = useHistory();
    const textFooter = "Do dzieła!"
    const [ nextPage, setNextPage ] = useState("/questions/" + tone[location.state.state].link);
    const handleClickBack = () => history.goBack();
    let locationState = { state: location.state.state + 1 }; 

    //const [active, setActive] = useState()

    const handleChange = () => {

    }

    useEffect(() => {
        console.log(location.state)
    }, [locationState.state])
    
    return(
        <React.Fragment>
            <div className={classes.main}>
                <div className={classes.question}>
                    <h3>{ tone[location.state.state].question }</h3>
                    <img src={tone[location.state.state].image} /> 
                    <div className={classes.answers}>
                        <ul>
                            <li>
                                <input type="radio"
                                id="radio1"
                                name="answer"
                                value="Tak"
                                onChange={handleChange} />
                                <label for="radio1">Tak</label>
                            </li>
                            <li>
                                <input type="radio"
                                id="radio2"
                                name="answer"
                                value="Czasami"
                                onChange={handleChange} />
                                <label for="radio2">Czasami</label>
                            </li>
                            <li>
                                <input type="radio"
                                id="radio3"
                                name="answer"
                                value="Rzadko"
                                onChange={handleChange} />
                                <label for="radio3">Rzadko</label>
                            </li>
                            <li>
                                <input type="radio"
                                id="radio4"
                                name="answer"
                                value="Nie wiem"
                                onChange={handleChange} />
                                <label for="radio4">Niew wiem</label>
                            </li>
                            <li>
                                <input type="radio"
                                id="radio5"
                                name="answer"
                                value="Nie"
                                onChange={handleChange} />
                                <label for="radio5">Nie</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>     
            <Footer
                nextPage={nextPage}
                textFooter={textFooter}
                locationState={locationState}
                handleClickBack={handleClickBack} /> 
        </React.Fragment>
    );
}

export default Questions;