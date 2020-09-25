import { 
    FETCH_WEATHER_CITY_REQUEST, 
    FETCH_WEATHER_CITY_SUCCESS, 
    FETCH_WEATHER_CITY_FAILURE 
} from '../constants';

const initialState = {
    data: [],
    isLoading: false,
    isError: false,
};

export const cityWeather = (state = initialState, action) => {

    switch(action.type) {        
    
        case FETCH_WEATHER_CITY_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };

        case FETCH_WEATHER_CITY_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
            };

        case FETCH_WEATHER_CITY_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: action.payload,
            };

        default: 
            return state;

    }

}
