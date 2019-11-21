import React from 'react';
import classes from './Content.css';

const Content = props => {

    let css = [classes.content_inner];
    if(props.true) css = [classes.content_inner, classes.content_true];

    return(
        <div className={classes.content}>
            <div className={css.join(' ')}>
                <siv></siv>
                {props.children}
            </div>
        </div>
    );
}

export default Content;