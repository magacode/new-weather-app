import React from 'react';
import List from '@material-ui/core/List';

import { WeatherItem } from '../weather-item';

export const WeatherList = ({ weatherList, onOpen }) => (
    <List component="nav" aria-label="city weather">
        {weatherList?.map((weather) => (
            <WeatherItem 
                key={weather.id} 
                weather={weather} 
                onOpen={onOpen} 
            />
        ))}
    </List>
)
