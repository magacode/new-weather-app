import { APP_ID } from '../constants';
import API from '../utils/axios-settings';

export class WeatherApi {

    static getWeatherData = async () => { 
        const url = '/group'
        const params = {
            id: '524901,703448,2643743',
            lang: 'ru',
            units: 'metric',
            appid: APP_ID,
        }

        return API.get(url, { params });
    };

    static getWeatherCityData = async ({ lat, lon }) => { 
        const url = `/onecall`;
        const params = {
            lat,
            lon,
            lang: 'ru',
            units: 'metric',
            appid: APP_ID,
        }

        return API.get(url, { params });
    };

}
