import { combineReducers } from 'redux';

import { commonWeather } from './common-weather';
import { cityWeather } from './city-weather';

export default combineReducers({
    commonWeather,
    cityWeather,
});