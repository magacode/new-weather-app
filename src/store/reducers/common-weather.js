import { 
    FETCH_WEATHER_REQUEST, 
    FETCH_WEATHER_SUCCESS, 
    FETCH_WEATHER_FAILURE 
} from '../constants';

const initialState = {
    data: [],
    isLoading: false,
    isError: false,
};

export const commonWeather = (state = initialState, action) => {

    switch(action.type) {        

        case FETCH_WEATHER_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };

        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                data: action.payload,    
                isLoading: false,
            };

        case FETCH_WEATHER_FAILURE:
            return {
                isLoading: false,
                isError: action.payload,
            };

        default: 
            return state;

    }

}
