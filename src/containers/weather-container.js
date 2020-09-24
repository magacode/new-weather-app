import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';

import ErrorIndicator from '../components/error-indicator';
import { getWeatherData } from '../store/actions';
import WeatherList from '../components/weather-list';
import TransitionsModal from '../components/modal';
// import Modal from '@material-ui/core/Modal';
import ModalBody from '../components/modal-body';

const WeatherContainer = (props) => {
    
    const { 
        getWeatherHandler, 
        weatherLoading, 
        weatherError, 
        weatherData,  
    } = props;

    const [ isOpen, setIsOpen ] = useState(false);
    const [ cityWeatherData, setCityWeatherData ] = useState({ name: '', coord: { lat: '', lon: '' } });

    const handleOpen = () => {
        setIsOpen(true);
      };
    
    const handleClose = () => {
        setIsOpen(false);
    };

    const { list } = weatherData;

    useEffect(() => { 
        getWeatherHandler()
    }, [])

    const spinner = weatherLoading ? <CircularProgress /> : null;
    const errorMessage = weatherError ? <ErrorIndicator /> : null;

    const hasData = !(weatherLoading || weatherError);
    const content = hasData ? <WeatherList list={list} setIsOpen={setIsOpen} setDataModal={setCityWeatherData} /> : null;

    return (
        <div className="">
            <div className="">
                { spinner }
                { errorMessage }
                { content }  
                {/* <ModalBody data={cityWeatherData.coord} /> */}
                <TransitionsModal isOpen={isOpen} isClose={handleClose} data={cityWeatherData} />
            </div>
        </div>
    )
    
};

const mapStateToProps = ({ weatherReducer }) => {
    return {
        weatherLoading: weatherReducer.loading,
        weatherError: weatherReducer.error,
        weatherData: weatherReducer.weatherData,        
    }
}

const mapDispatchToProps = (dispatch) => ({
    getWeatherHandler: () => dispatch(getWeatherData()), 
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer)
