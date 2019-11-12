import React from 'react';
import {useLocation, useHistory} from 'react-router-dom';

import Footer from './../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';

const SetupInstruction = () => {
    const headerText = "Przed rozpoczęciem";
    const link = "/test";
    const location = useLocation();
    const history = useHistory();
    console.log(history);
    
    return(
        <React.Fragment>
            <div>
                <Header text={headerText} />  
                <Content>
                    <h2>Upewnij się, że przebywasz w cichym pomieszczeniu.</h2>
                </Content>
                <Footer 
                    history={history}
                    link={link}
                />
            </div>
        </React.Fragment>
    );
}

export default SetupInstruction;