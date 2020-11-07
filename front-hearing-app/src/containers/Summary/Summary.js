import React, { useEffect, useState } from 'react';
import classes from './Summary.css'
import Footer from '../../components/Footer/Footer';
import { Bubble } from 'react-chartjs-2'


// 505 535 510

const Summary = () => {
    const nextPage = "/";
    const textFooter = "Powrót na stronę główną";
    const [ chartData, setChartData ] = useState({});
    const options = {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    max: 120,
                    min: -5,
                    stepSize: 10,
                    reverse: true
                }
            }]
        }
    }

    const chart = () => {
        setChartData({
            labels: ['250', '500', '1000', '2000', '4000', '8000'],
            datasets: [
                {
                    labels: 'Level of thiccness',
                    data: [32, 45, 12, 76, 69],
                    backgroudnColor: [
                        'rgba(75, 192, 192, 0.6)'
                    ],
                    borderWidth: 4
                }
            ]
        })
    }

    useEffect(() => {
        chart();
    }, [])
    
    return(
        <React.Fragment>
            <div className={classes.main}>
                <h2>Podsumowanie</h2>
                <div className={classes.graph}>
                    <Bubble 
                        data={chartData}
                        options={options} />
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