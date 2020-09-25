import React from 'react';
import { 
    Modal, 
    Backdrop, 
    Fade, 
    Button, 
    makeStyles,
} from '@material-ui/core'

import { CityWeather } from '../../containers/city-weather';

const useStyles = makeStyles((theme) => ({
    modal: {},
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    modalInner: {
        width: '100vw',
        maxWidth: '750px',
        height: '500px',
        maxHeight: '100vh',
        overflow: 'auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
}));

export const TransitionsModal = ({ 
    openedCity, 
    isOpened,
    onClose, 
}) => {

    const classes = useStyles();

    if(!openedCity) {
        return null
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={isOpened}
                onClose={onClose}
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                closeAfterTransition
            >
                <div className={classes.modalInner}>
                    <Fade in={isOpened}>
                        <div className={classes.paper}>
                            <h2 id="transition-modal-title">
                                Прогноз погоды в г. {openedCity.name}
                            </h2>
                            <span id="transition-modal-description">
                                прогноз на неделю
                            </span>
                            <CityWeather openedCity={openedCity.coord} />
                            <Button variant="contained" color="secondary" onClick={onClose}>
                                Закрыть
                            </Button>
                        </div>
                    </Fade>
                </div>
            </Modal>
        </div>
    );
}