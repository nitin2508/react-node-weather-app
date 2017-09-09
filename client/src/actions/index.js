import axios from 'axios';
import {store} from '../index.js';
import Notifications, {notify} from 'react-notify-toast';
const API_KEY='61403d9f2c2be2c2ee9788b5c1ae3da1';
export const FETCH_WEATHER ='FEATCH_WEATHER';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';


export function fetchWeather(address){
	loading();
    const weatherObj = {address:address}
    //const url ='http://localhost:3000/weather';
		const url = 'http://weather.nitinnagarlab.com/weather';
    const request =axios.post(url,weatherObj);

    return{
        type:FETCH_WEATHER,
        payload:request
    }
}

function loading(){
    store.dispatch({
        type:LOADING
    });
}
