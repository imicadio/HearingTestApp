import React from 'react';

import Footer from './../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';

const Test = () => {
    const headerText = "Czy słyszysz dźwięk?";
    const link = "";

    return(
        <React.Fragment>
            <div>
                <Header text={headerText} />  
                <Content>
                    <h2>Naciśnij "Play" aby odtworzyć dźwięk</h2>
                </Content>
                <Footer link={link}/>
            </div>
        </React.Fragment>
    );
}

export default Test;