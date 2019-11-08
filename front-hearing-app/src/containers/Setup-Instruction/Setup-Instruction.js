import React from 'react';

import Footer from './../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';

const SetupInstruction = () => {
    const headerText = "Przed rozpoczęciem";
    const link = "";

    return(
        <React.Fragment>
            <div>
                <Header text={headerText} />  
                <Content>
                    <h2>Upewnij się, że przebywasz w cichym pomieszczeniu.</h2>
                </Content>
                <Footer link={link}/>
            </div>
        </React.Fragment>
    );
}

export default SetupInstruction;