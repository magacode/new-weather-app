import API from '../utils/axios-settings';

class WeatherApi {

    getWeatherData = async () => { 
        const addr = `/group?id=524901,703448,2643743&lang=ru&units=metric&appid=b8dd12b10a5e9b631f1d9b511e5e36b3`;
        return await API.get(addr);
    };

    getWeatherCityData = async ({ lat, lon }) => { 
        const addr = `/onecall?lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=b8dd12b10a5e9b631f1d9b511e5e36b3`;
        return await API.get(addr);
    };

}

export default new WeatherApi();