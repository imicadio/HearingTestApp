import React, { useEffect, useState } from 'react';
import classes from './Summary.css'
import Footer from '../../components/Footer/Footer';
import { Line,  } from 'react-chartjs-2'
import { forms, reloadPage } from '../../store/tone';
import { useHistory} from 'react-router-dom';

const Summary = () => {
    const history = useHistory();
    const nextPage = "/";
    const textFooter = "Ponów test";
    const [ chartData, setChartData ] = useState({});
    const Hz = [250, 500, 1000, 2000, 4000, 8000];
    const [ text1, setText1 ] = useState('');
    const [ text2, setText2 ] = useState('');
    useEffect(() => {
        if(reloadPage[1] === '')
            history.push('/')
    }, [])

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
            position: 'bottom'
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Decybele [dB]'
                },
                ticks: {
                    max: 80,
                    min: -10,
                    stepSize: 10,
                    reverse: true
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Częstotliwość [Hz]'
                }                
            }]
        }
    }

    const chart = (array) => {
        setChartData({       
            labels: [...Hz],
            datasets: [
                {
                    label: 'Audiogram',
                    data: [...array],
                    backgroundColor: 'rgb(255 94 43)',
                    borderColor: 'rgb(255 94 43)',
                    pointStyle: 'triangle',
                    borderWidth: 2,
                    radius: 4,
                    lineTension: 0,
                    fill: false,
                }
            ]
        })
    }

    useEffect(() => {
        // let points = [30, 70, 60, 0, 30, 50];
        let points = []
        let tmpforms = {...forms}
        for (const i in tmpforms){
            if (typeof(tmpforms[i].value) === "number")
                points.push(tmpforms[i].value)
        }
        chart(points);
        let summary = {
            1: points.filter(x => x <= 20).length,
            2: points.filter(x => x > 20 && 20 <= 50).length,
            3: points.filter(x => x > 50).length,
        }
        
        if(forms[1].value === 'Nie') {
            setText1('Bardzo słaby');
            setText2('Wynik testu wykazuje, że powinieneś umówić się na badanie słuchu u specjalisty')
            return
        }
        else if(summary[1] === 0) {
            setText1('Bardzo słaby');
            setText2('Wynik testu wykazuje, że powinieneś umówić się na badanie słuchu u specjalisty')
            return
        }
        else if (summary[1] + summary[2] <= summary[3]) {
            setText1('Bardzo słaby');
            setText2('Wynik testu wykazuje, że powinieneś umówić się na badanie słuchu u specjalisty')
            return
        }
        else if (summary[1] < summary[2] + summary[3]) {
            if(summary[2] <= summary[3]){
                setText1('Bardzo słaby');
                setText2('Wynik testu wykazuje, że powinieneś umówić się na badanie słuchu u specjalisty')
                return
            }
            else {
                setText1('Słaby');
                setText2('Wynik testu wykazuje, że powinieneś umówić się na badanie słuchu u specjalisty')
                return
            }            
        }
        else {
            setText1('Dobry');
            setText2('Wynik testu wykazuje, że nie masz problemów ze słuchem')
            return
        }
    }, [])
    
    return(
        <React.Fragment>
            <div className={classes.test}>
                <div className={classes.summary}>
                    <h2>Twój słuch jest: </h2>
                    <h2>{text1}</h2>                    
                </div>
                <div className={classes.info1}>
                    <p>Pamiętaj, że ten test <span>nie zastąpi profesjonalnego testu badania słuchu.</span></p>
                    <p>{text2}</p>
                </div>
                {
                    forms[1].value === 'Nie' ?
                    null : 
                    <div className={classes.graph}>
                        <h4>Audiogram</h4>
                        <p>Wykres zależności częstotliwości od decybeli</p>
                        <Line 
                            // height={250}
                            data={chartData}
                            options={options} />
                    </div>
                }                
                <div className={classes.info2}>
                    <h2>Ubytek słuchu</h2>
                    <ul>
                        <li>Utrata słuchu może być częściowa lub całkowita</li>
                        <li>Na świecie istnieje ponad 1.33 miliarda osób z ubytkiem słuchu (około 20% populacji ziemi).</li>
                        <li>W Polsce istnieje ponad 6 milionów polaków mających problemy ze słuchem</li>
                        <li>Utrata słuchu może być związana z genetyką, starzeniem się, narażeniem na hałas, infekcjami, a nawet niektórymi lekami lub toksynami</li>
                        <li>Najpopularniejszym stanem powodującym utratę słuchu są przewlekłe infekcje ucha</li>
                        <li>Osoby z niedosłuchem czekają średnio 10 lat zanim podejmą jakiekolwiek kroki</li>
                    </ul>
                    <br />
                    <h2>Zrozumieć ubytek słuchu</h2>
                    <p>Osoba z niedosłuchem - niekoniecznie oznacza to, że nie słyszy cichych dźwięków, zamiast tego może odbierać dźwięki jako "przytłumione", miewać problemy z usłyszeniem pojedynczych 
                        słów lub spółgłosek w hałaśliwych otoczeniach. Często zauważa się, że osoby z niedosłuchem zwiększają głośność multimedii do wysokiego poziomu takiego jak słuchawki, 
                        telewizor, telefon czy radio. Podczas rozmowy mogą poprosić o powtarzanie słów/zdań lub proszą rozmówcę by mówił <b>wolniej i wyraźniej</b>. Bardzo często obserwuje się zmiany 
                        w zachowaniu jak na przykład brak zainteresowania uczestnictwem w wydarzeniach towarzyskich, rezygnacja udziału w rozmowach, skonsternowanie w grupie.
                    </p>
                    <p>Najczęściej występujące objawy ubytku słuchu:</p>
                    <ul>
                        <li>Problemy z odbiorem cichych dźwięków</li>
                        <li>Problemy z rozmową w hałasie np. na ulicy</li>
                        <li>Często musisz obserwować twarz rozmówcy by zrozumieć co do ciebie mówi</li>
                        <li>Wydaje ci się, że osoby mówią cicho lub niewyraźnie</li>
                        <li>Musisz się domyślać co inni mówili</li>
                        <li>Podgłaszasz urządzenia multimedialne</li>
                    </ul>
                    <br /> 
                    <h2>Ikonografika ubytku słuchu</h2>
                    <div className={classes.info2__scale}>                        
                        <ul>
                            <li><b>Prawidłowe słyszenie</b> (&lt;25dB) brak zauważalnych objawów ubytku słuchu.</li>
                            <li><b>Lekki ubytek</b> (26-40dB) najcichsze dźwięki słyszalne stają się trudne do zrozumienia np. cicha rozmowa czy rozmowa w hałasie.</li>
                            <li><b>Średni ubytek</b> (40-60dB) dźwięki przeszkadzające innym np. głośna rozmowa, szczekanie psa, telewizor podgłaśniany, który przeszkadza innym.</li>
                            <li><b>Głęboki ubytek</b> (61-80dB) rozumienie mowy jest niemożliwe bez wyższego tonu dźwięku. Występują trudności w komunikacji grupowej.</li>
                            <li><b>Resztki słuchowe</b> (81-120dB) usłyszenie działających urządzeń jest niemożliwe, mowa jest niesłyszalna, niezrozumiała.</li>
                        </ul>  
                        <img src={'https://okrabygg.se/wp-content/uploads/2020/12/graph_dB.png'} alt="skala ubytku słuchu" />                      
                    </div>
                    <h2>Ubytek słuchu może wpływać na stan twojego samopoczucia</h2>
                    <p>Niedosłuch może spowodować wycofanie się z życia towarzyskiego. Rozmowa wymaga dużego wysiłku i energii. Skutki mogą być fatalne. Objawy między innymi to:</p>
                    <ul>
                        <li>Niepewne poczucie bezpieczeństwa</li>
                        <li>Brak szybkiej reakcji skąd pochodzą dźwięki</li>
                        <li>Unikanie rozmowy</li>
                        <li>Przygnębienie, samotność</li>
                        <li>Problemy z pamięcią</li>
                        <li>Problemy z rozumieniem mowy</li>
                        <li>Depresja</li>
                        <li>Spadek samooceny i poczucia wartości</li>
                    </ul>
                    <p>Aby temu zapobiec najlepiej udać się jak najszybciej do specjalisty. Proste badanie może uratować twoje życie.</p>
                    <p><b>Dźwięki wykrozystane w teście pokazują przybliżony obraz badania słuchu.</b></p>
                </div>
                <div className={classes.life}>
                    <h2>Michał Jeszko</h2>
                </div>
            </div>     
            <Footer
                nextPage={nextPage}
                textFooter={textFooter}
                tmpButton={"start"} />  
        </React.Fragment>
    );
}

export default Summary;