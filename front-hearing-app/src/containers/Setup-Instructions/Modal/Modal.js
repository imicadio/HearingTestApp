import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ModalSetup = props => {
    const [open, setOpen] = React.useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
        <Dialog
            open={props.openModal}            
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Jak ustawić głośność na urządzeniach?"}</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                <strong>Windows 10</strong>
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
                <p>W systemie Windows 10 ustaw głośność</p>
                <img src="http://okrabygg.se/wp-content/uploads/2020/09/win10_sound.png" alt="Głośność Windows10" />
            </DialogContentText>
            </DialogContent>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                <strong>Smartfony</strong>
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
                <p>W smartfonie ustaw głośność</p>
                <img src="http://okrabygg.se/wp-content/uploads/2020/09/android.jpg" alt="Głośność smartfonu" width="150"/>
            </DialogContentText>
            </DialogContent>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                <strong>*Jeśli używasz słuchawek z regulacją głośności - ustaw słuchawki na maksymalną głośność</strong>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={props.closeModal} color="primary">
                Anuluj
            </Button>
            <Button onClick={props.closeModal} color="primary" autoFocus>
                Ok
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

export default ModalSetup;