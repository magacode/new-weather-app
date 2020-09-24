import React from 'react';
import List from '@material-ui/core/List';

import WeatherItem from '../weather-item';

const WeatherList = ({ list, setIsOpen, setDataModal }) => {
  return (
    <List component="nav" aria-label="city weather">
      {
        list.map((data) => {
          const { id } = data;

          return <WeatherItem weatherData={data} setIsOpen={setIsOpen} setDataModal={setDataModal} key={id} />;
        })
      }
  </List>
  );        
}

export default WeatherList;