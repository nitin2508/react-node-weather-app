import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines,SparklinesLine} from 'react-sparklines'
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'


class WeatherList extends Component{

    renderWeather(cityData){
        const temps = cityData.hourly.data.map(weather=>weather.temperature);
         const pressure = cityData.hourly.data.map(weather=>weather.pressure);
         const humidities = cityData.hourly.data.map(weather=>weather.humidity*100);
        const {longitude,latitude} = cityData;

        return(
            <tr key={longitude}>
            <td><GoogleMap lon={longitude} lat={latitude}/></td>
            <td><Chart data={temps} units ="far" color="orange"/></td>
            <td><Chart data={pressure} units="hPa" color="green"/></td>
             <td><Chart data={humidities} units="%" color="black"/></td>
            </tr>
        )

    }

    render(){
        return(
            <table className="table table-hover">
            <thead>
            <tr>
            <th>City</th>
            <th>Temperature(K)</th>
            <th>Pressure(hpa)</th>
            <th>Humidity(%)</th>
            </tr>
            </thead>
            <tbody>
            {this.props.weather.map(this.renderWeather)}
            </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}){
    return {weather} //{weather:weather}
}

export default connect (mapStateToProps)(WeatherList);
