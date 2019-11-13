import React from 'react';
import {useHistory} from 'react-router-dom';

import Footer from './../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Sound from '../../components/Sound/Sound';

const Test = () => {
    const history = useHistory();
    const headerText = "Czy słyszysz dźwięk?";
    const link = "";
    var aud = new Audio("http://imicadio.com/HearingTestApp/assets/audio/250Hz/250_80.ogg"); 
    

    return(
        <React.Fragment>
            <div>
                <Header text={headerText} />  
                <Content>                     
                    <Sound aud={aud} />
                </Content>
                <Footer 
                    history={history}
                    link={link}
                />
            </div>
        </React.Fragment>
    );
}

export default Test;