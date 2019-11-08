import React from 'react';

import Footer from './../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import classes from './Home.css'
import img from "./../../assets/images/hearing-01.svg";
import Content from '../../components/Content/Content';

const Home = () => {
    
    const headerText = "5 minutowy test słuchu";
    const link = "/setupInstructions";

    return(
        <React.Fragment>
            <div>
                <Header text={headerText} />  
                <Content>
                    <img src={img} alt="Ubytek słuchu" />
                    <h2>Czy uważasz, że masz problem ze słuchem?</h2>
                    <div className={classes.max_width}>
                        <ul className={classes.answers}>
                            <li>
                                <input type="radio" id="radio1" name="problem" value="Tak" />
                                <label for="radio1">Tak</label>
                            </li>
                            <li>
                                <input type="radio" id="radio2" name="problem" value="Nie wiem" />
                                <label for="radio2">Nie wiem</label>
                            </li>
                            <li>
                                <input type="radio" id="radio3" name="problem" value="Nie" />
                                <label for="radio3">Nie</label>
                            </li>
                        </ul>
                    </div>
                </Content>
                <Footer link={link}/>
            </div>
        </React.Fragment>
    );
}

export default Home;