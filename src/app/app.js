import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';

import { CommonWeather } from '../containers/common-weather/common-weather';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

export const App = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Container maxWidth="sm">
                <Grid container spacing={3}>
                    <Grid item xs={12}>            
                        <CommonWeather /> 
                    </Grid>      
                </Grid>
            </Container>
        </div>
    );
}
