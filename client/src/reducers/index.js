import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import ErrorReducer from './reducer_error';
import LoadingReducer from './reducer_loading'

const rootReducer = combineReducers({
    weather:WeatherReducer,
    error:ErrorReducer,
    loading:LoadingReducer
});

export default rootReducer;
