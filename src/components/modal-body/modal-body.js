import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';

import ErrorIndicator from '../error-indicator';
import WeatherTable from '../weather-table';
import { getWeatherCityData } from '../../store/actions';

const ModalBody = ({ 
        getWeatherCityHandler, 
        weatherCityLoading, 
        weatherCityError, 
        weatherCityData, 
        data, 
}) => {

    useEffect(() => { 
        getWeatherCityHandler(data);
    }, [data]);
    
    const hasData = !(weatherCityLoading || weatherCityError);

    return (
        <>  
            { weatherCityLoading && <CircularProgress /> }
            { weatherCityError && <ErrorIndicator /> }
            { hasData && <WeatherTable data={weatherCityData}  /> } 
        </>
    )
}

const mapStateToProps = ({ weatherCityReducer }) => {
    return {
        weatherCityLoading: weatherCityReducer.loading,
        weatherCityError: weatherCityReducer.error,
        weatherCityData: weatherCityReducer.weatherCityData,        
    }
}

const mapDispatchToProps = (dispatch) => ({
    getWeatherCityHandler: (data) => dispatch(getWeatherCityData(data)), 
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalBody)
