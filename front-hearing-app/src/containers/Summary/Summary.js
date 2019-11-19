import React, { useEffect } from 'react';
import { useHistory} from 'react-router-dom';
import { forms } from '../../hooks-store/sounds';

import Footer from './../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Answers from '../../components/Answers/Answers';

const Summary = () => {

    const history = useHistory();

    let score;

    if(forms["test"].value == "Tak") score = "bardzo słaby";
    else {
        let arrayScore = [];
        for(let key in forms) {
            if(forms[key].count) arrayScore.push(forms[key].count);
        }
        
        let _score = arrayScore.reduce((a, b) => a + b);

        if(_score < 6) {
            score = "bardzo słaby";
        }
        else if(_score < 7.5) {
            score = "dobry";
        }
        else {
            score = "bardzo dobry";
        }
    }

    const headerText = `Twój słuch jest ${score}`;

    useEffect(() => {
        if(forms["home"].value == "") history.push('/');
    }, []);

    return(
        <React.Fragment>
            <div>
                <Header text={headerText} />  
                <Content>                
                    <h2>Czy uważasz, że masz problem ze słuchem?</h2>                
                    <Answers>

                    </Answers>
                </Content>
                <Footer />
            </div>
    </React.Fragment>
    );
}

export default Summary;