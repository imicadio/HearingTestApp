import React from 'react';
import { forms } from '../../hooks-store/sounds';

import Footer from './../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Answers from '../../components/Answers/Answers';

const Summary = () => {

    const headerText = `Twój słuch jest dobry`;

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