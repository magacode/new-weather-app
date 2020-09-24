import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';

import ErrorIndicator from '../components/error-indicator';
import { getWeatherData } from '../store/actions';
import WeatherList from '../components/weather-list';
import TransitionsModal from '../components/modal';

const WeatherContainer = ({ 
  getWeatherHandler, 
  weatherLoading, 
  weatherError, 
  weatherData  
}) => {

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

  const hasData = !(weatherLoading || weatherError);    

  return (        
      <>
          { weatherLoading && <CircularProgress /> }
          { weatherError && <ErrorIndicator /> }
          { hasData && <WeatherList list={list} setIsOpen={setIsOpen} setDataModal={setCityWeatherData} /> }  

          <TransitionsModal isOpen={isOpen} isClose={handleClose} data={cityWeatherData} />
      </>        
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
