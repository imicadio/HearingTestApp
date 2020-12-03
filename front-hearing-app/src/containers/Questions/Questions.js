import React, { useEffect, useState } from 'react';
import { useHistory} from 'react-router-dom';
import classes from './Questions.css';
import Footer from '../../components/Footer/Footer';
import { tone, forms, reloadPage } from '../../store/tone';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Questions = ({match, location}) => {
    const {
        params: {id}
    } = match;

    const history = useHistory();
    const textFooter = "Dalej"
    const [ nextPage, setNextPage ] = useState("/questions/" + tone[location.state.state].link);
    const handleClickBack = () => history.goBack();
    let locationState = { state: location.state.state + 1 }; 
    const [ select, setSelect ] = useState(forms[location.state.state].value);

    useEffect(() => {
        if(reloadPage[1] === '')
            history.push('/')
    }, [])

    //const [active, setActive] = useState()

    const handleChange = (event) => {
        const { value } = event.target;
        setSelect(value);
        forms[location.state.state].value = value;
    }

    useEffect(() => {
        setSelect(forms[location.state.state].value);
        tone[location.state.state - 1].link === "question=4" ? setNextPage("/summary") : setNextPage("/questions/" + tone[location.state.state].link)
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
                                onChange={handleChange}
                                checked={select === "Tak"} />
                                <label for="radio1">Tak</label>
                            </li>
                            <li>
                                <input type="radio"
                                id="radio2"
                                name="answer"
                                value="Czasami"
                                onChange={handleChange}
                                checked={select === "Czasami"} />
                                <label for="radio2">Czasami</label>
                            </li>
                            <li>
                                <input type="radio"
                                id="radio3"
                                name="answer"
                                value="Rzadko"
                                onChange={handleChange}
                                checked={select === "Rzadko"} />
                                <label for="radio3">Rzadko</label>
                            </li>
                            <li>
                                <input type="radio"
                                id="radio4"
                                name="answer"
                                value="Nie wiem"
                                onChange={handleChange}
                                checked={select === "Nie wiem"} />
                                <label for="radio4">Niew wiem</label>
                            </li>
                            <li>
                                <input type="radio"
                                id="radio5"
                                name="answer"
                                value="Nie"
                                onChange={handleChange}
                                checked={select === "Nie"} />
                                <label for="radio5">Nie</label>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.questions__select}>
                        <FormControl variant="outlined" fullWidth={true} className={classes.formControl}>
                            <InputLabel>Wybierz</InputLabel>
                            <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={select}
                            onChange={handleChange}
                            label="Wybierz"
                            >
                                <MenuItem value={'Tak'}>Tak</MenuItem>
                                <MenuItem value={'Czasami'}>Czasami</MenuItem>
                                <MenuItem value={'Rzadko'}>Rzadko</MenuItem>
                                <MenuItem value={'Nie wiem'}>Nie wiem</MenuItem>
                                <MenuItem value={'Nie'}>Nie</MenuItem>
                            </Select>
                        </FormControl>
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