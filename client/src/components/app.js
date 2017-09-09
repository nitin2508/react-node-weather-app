import React, {Component} from 'react';
 import SearchBar from '../containers/search_bar';
 import WeatherList from '../containers/weather_list';
 import Notifications, {notify} from 'react-notify-toast';
 import '../style/style.css';

export default class App extends Component {
  render() {
    return (
        <div>
        <Notifications />
        <SearchBar/>
        <WeatherList/>
        </div>
    );
  }
}
