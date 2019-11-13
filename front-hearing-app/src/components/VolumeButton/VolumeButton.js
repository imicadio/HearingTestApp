import React from 'react';
import classes from './VolumeButton.css';

const VolumeButton = props => {
    let iconButton = [classes.icon_btn, classes.add_btn];

    return(
        <React.Fragment>
            <div className={classes.main_btn}>
                <hr className={classes.main_hr} />
                <button 
                    onClick={props.volumeAdd}
                    className={iconButton.join(' ')}
                >
                    <div className={classes.add_icon}></div>
                    <div className={classes.btn_txt}>Add</div>
                </button>
                <button 
                    onClick={props.volumeRemove}
                    className={iconButton.join(' ')}
                >  
                    <div className={classes.btn_txt}>Remove</div>
                </button>
            </div>
        </React.Fragment>
    );
}

export default VolumeButton;