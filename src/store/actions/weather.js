import { 
  FETCH_WEATHER_REQUEST, 
  FETCH_WEATHER_SUCCESS, 
  FETCH_WEATHER_FAILURE 
} from '../constants';

import { WeatherApi } from '../../api/weather-api';

export const getWeatherData = () => async dispatch =>{

  dispatch({
      type: FETCH_WEATHER_REQUEST,
  });

  try {

      const { data } = await WeatherApi.getWeatherData();

      dispatch({
          type: FETCH_WEATHER_SUCCESS,
          payload: data,
      });

  } catch(error) {

      dispatch({
          type: FETCH_WEATHER_FAILURE,
          payload: Boolean(error),
      })

  } 

}