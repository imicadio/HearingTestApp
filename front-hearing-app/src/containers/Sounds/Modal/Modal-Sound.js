import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import classes from './Modal-Sound.css'
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    setup__icon: {    
        fontSize: 60,
        [theme.breakpoints.down("sm")]: { 
            fontSize: 60
        }       
        },        
    }
));

const ModalSound = props => {
    const customMui = useStyles();
    return (
        <div>
        <Dialog
            open={props.openModal}            
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle  id="alert-dialog-title"><VolumeUpIcon className={[classes.dialog__sound__icon, customMui.setup__icon]} /></DialogTitle>
            <DialogTitle className={classes.dialog__sound} id="alert-dialog-title">{"Osiągnięto maksymalną głośność"}</DialogTitle>
            <DialogActions className={classes.dialog__sound__buttons}>
                <Button variant="contained" onClick={props.repeatTest}>
                    Chcę spróbować jeszcze raz
                </Button>
                <Button variant="contained" onClick={props.closeModal} color="secondary">
                    Nie słychać dźwięku
                </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

export default ModalSound;