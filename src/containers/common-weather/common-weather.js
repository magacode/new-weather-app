import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import { ErrorIndicator } from '../../components/error-indicator';
import { getWeatherData } from '../../store/actions';
import { WeatherList } from '../../components/weather-list';
import { TransitionsModal } from '../../components/transitions-modal';

const CommonWeatherComponent = ({ 
    commonWeather,  
    isLoading, 
    isError, 
    handleFetchWeather, 
}) => {

    const [openedCity, setOpenedCity] = useState(null);
    const [isOpenedModal, setIsOpenedModal] = useState(false);

    const handleOpenModal = useCallback((city) => {
        setOpenedCity(city);
        setIsOpenedModal(true);
    }, []);    

    const handleCloseModal = useCallback(() => {
        setOpenedCity(null);
        setIsOpenedModal(false);
    }, []);

    useEffect(() => { 
        handleFetchWeather();
    }, [handleFetchWeather])

    return (        
        <>

            {isLoading && (
                <CircularProgress />
            )}

            {isError && (
                <ErrorIndicator />
            )}

            {!isLoading && !isError && (
                <WeatherList 
                    weatherList={commonWeather.list} 
                    onOpen={handleOpenModal}
                />
            )}  

            <TransitionsModal 
                isOpened={isOpenedModal} 
                onClose={handleCloseModal} 
                openedCity={openedCity} 
            />

        </>        
    )

};

const mapStateToProps = (state) => ({
    commonWeather: state.commonWeather.data,
    isLoading: state.commonWeather.isLoading,
    isError: state.commonWeather.isError,
})

const mapDispatchToProps = (dispatch) => ({
    handleFetchWeather: () => dispatch(getWeatherData()), 
})

export const CommonWeather = connect(mapStateToProps, mapDispatchToProps)(CommonWeatherComponent)
