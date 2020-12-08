import React, { useEffect } from 'react';
import classes from './Home.css';
import Footer from '../../components/Footer/Footer';
import { reloadPage } from '../../store/tone';
import { useHistory} from 'react-router-dom';

const Home = () => {
    const history = useHistory();

    const nextPage = "/setup-instructions"
    const textFooter = "Do dzieła!"

    useEffect(() => {
        if(reloadPage[1] === 'No')
            window.location.reload()
    }, [])

    return(
        <React.Fragment>
            <div className={classes.main}>
                <h2 className={classes.home__h2}>Witamy w teście badania słuchu w trybie online</h2>
                <h3 className={classes.home__h3}>Wykonaj krótki 5 minutowy test słuchu i dowiedz się czy dobrze słyszysz</h3>
                <div className={classes.home__UWM}>
                    <h2>Uniwersytet Warmińsko Mazurski w Olsztynie</h2>
                    <h3>Praca Magisterska</h3>
                    <h4>Autor: Michał Jeszko</h4>
                    <h4>Opiekun: dr Stanisław Drozda</h4>
                    <h5>Olsztyn 2020 / 2021</h5>
                </div>
            </div>     
            <Footer
                nextPage={nextPage}
                textFooter={textFooter}
                tmpButton={"start"} />  
        </React.Fragment>
    );
}

export default Home;