import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import { ErrorIndicator } from '../../components/error-indicator';
import { WeatherTable } from '../../components/weather-table';
import { getWeatherCityData } from '../../store/actions';

const CityWeatherComponent = ({ 
    cityWeather, 
    isLoading, 
    isError, 
    openedCity,
    handleFetchCityWeather, 
}) => {

    useEffect(() => { 
        handleFetchCityWeather(openedCity);
    }, [openedCity, handleFetchCityWeather]);

    return (
        <>

            {isLoading && (
                <CircularProgress />
            )}

            {isError && (
                <ErrorIndicator />
            )}

            {!isLoading && !isError && (
                <WeatherTable weatherCity={cityWeather} />
            )} 

        </>
    )
}

const mapStateToProps = (state) => ({
    cityWeather: state.cityWeather.data,
    isLoading: state.cityWeather.isLoading,
    isError: state.cityWeather.error,
})

const mapDispatchToProps = (dispatch) => ({
    handleFetchCityWeather: (data) => dispatch(getWeatherCityData(data)), 
})

export const CityWeather = connect(mapStateToProps, mapDispatchToProps)(CityWeatherComponent)
