import { FETCH_WEATHER_CITY_REQUEST, FETCH_WEATHER_CITY_SUCCESS, FETCH_WEATHER_CITY_FAILURE } from '../constants';

const initialState = {
  loading: true,
  weatherCityData: [],
  error: false,
};

const weatherCityReducer = (state = initialState, action) => {

  switch(action.type) {        

    case FETCH_WEATHER_CITY_REQUEST:
        return {
            ...state,
        };

    case FETCH_WEATHER_CITY_SUCCESS:
        return {
            ...state,
            loading: false,
            weatherCityData: action.payload,
        };

    case FETCH_WEATHER_CITY_FAILURE:
        return {
            loading: false,
            weatherCityData: [],
            error: action.payload,
        };

    default: 
        return state;
  }

}

export default weatherCityReducer;