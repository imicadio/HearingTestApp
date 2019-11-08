import React from 'react';
import classes from './Home.css'
import img from "./../../assets/images/hearing-01.svg";

const Home = () => {
    return(
        <React.Fragment>
            <div>
                <div className={classes.top_belt}>
                    <h2>5 minutowy test słuchu</h2>
                </div>   
                <div className={classes.content}>
                    <div className={classes.content_inner}>
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
                    </div>
                </div> 
                <div className={classes.footer}>
                    <div className={classes.footer_inner}>
                        <span className={classes.button}>
                            <button>Sprawdźmy!</button>
                        </span>
                    </div>
                </div>
            </div>

            {/* <div className={classes.Container}>
                <h2>Czy uważasz, że masz problem ze słuchem?</h2>                
            </div>   
            <div className={classes.Container}>
                <img src={img} alt="Ubytek słuchu" />
            </div>
            <div className={classes.Container}>
                <form>
                    <ul>
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
                </form>
            </div> */}
        </React.Fragment>
    );
}

export default Home;