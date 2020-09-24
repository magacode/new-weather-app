import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from '../constants';

const initialState = {
  loading: true,
  weatherData: [],
  error: false,
};

const weatherReducer = (state = initialState, action) => {

  switch(action.type) {        

    case FETCH_WEATHER_REQUEST:
        return {
            ...state,
        };

    case FETCH_WEATHER_SUCCESS:
        return {
            ...state,
            loading: false,
            weatherData: action.payload,            
        };

    case FETCH_WEATHER_FAILURE:
        return {
            loading: false,
            weatherData: [],
            error: action.payload,
        };

    default: 
        return state;
  }

}

export default weatherReducer;