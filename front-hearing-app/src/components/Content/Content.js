import React from 'react';
import classes from './Content.css';

const Content = props => {
    return(
        <div className={classes.content}>
            <div className={classes.content_inner}>
                {props.children}
            </div>
        </div>
    );
}

export default Content;