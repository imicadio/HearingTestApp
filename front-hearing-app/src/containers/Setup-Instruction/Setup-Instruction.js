import React from 'react';
import { useHistory} from 'react-router-dom';
import { forms } from '../../hooks-store/sounds';

import Footer from './../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';

const SetupInstruction = () => {
    const history = useHistory();
    const headerText = "Przed rozpoczęciem";
    const link = "/test";
    const disabledInfo = true; 

    const backButton = () => {
        history.goBack();
    }

    useEffect(() =>{
        if(forms["home"].value == "") history.push('/');
    }, []);
    
    return(
        <React.Fragment>
            <div>
                <Header text={headerText} />  
                <Content>
                    <h2>Upewnij się, że przebywasz w cichym pomieszczeniu.</h2>
                </Content>
                <Footer 
                    isValid={disabledInfo}
                    backButton={backButton}
                    link={link}
                />
            </div>
        </React.Fragment>
    );
}

export default SetupInstruction;