import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = "4de80f2272e1163a80b5f3962c399854"

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q:query,
            units: 'metric',
            APPID: API_KEY,
            lang:"tr"
        }
    });

    return data;
}