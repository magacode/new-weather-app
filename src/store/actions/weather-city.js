import { 
  FETCH_WEATHER_CITY_REQUEST, 
  FETCH_WEATHER_CITY_SUCCESS, 
  FETCH_WEATHER_CITY_FAILURE 
} from '../constants';

import { WeatherApi } from '../../api/weather-api';

export const getWeatherCityData = (coord) => async (dispatch) =>{

  dispatch({
      type: FETCH_WEATHER_CITY_REQUEST,
  });

  try {

      const { data } = await WeatherApi.getWeatherCityData(coord);

      dispatch({
          type: FETCH_WEATHER_CITY_SUCCESS,
          payload: data,   
      });

  } catch(error) {

      dispatch({
          type: FETCH_WEATHER_CITY_FAILURE,
          payload: Boolean(error),
      })

  } 

}