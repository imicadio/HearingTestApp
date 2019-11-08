import React from 'react';

import classes from './Answers.css';

const Answers = props => {
    return(
        <div className={classes.max_width}>
            <ul className={classes.answers}>
                {props.children}
            </ul>
        </div>
    );
}

export default Answers;