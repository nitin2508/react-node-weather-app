import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state ={term:'',getCurrentLocationWeather:true};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.getLocation = this.getLocation.bind(this);
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''})
    }

    onInputChange(event){
                this.setState({term:event.target.value});
            }

      giveButtonType(){
        if(!this.props.isLoading){
            return(<button type="submit" className="btn btn-secoundary">Submit</button>)
        }else{
            return (<button className="btn btn-secoundary"><span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Loading...</button>);
        }
      }

  getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((location)=>{
          this.setState({getCurrentLocationWeather:false});
          this.props.fetchWeather(location.coords.latitude,location.coords.longitude);
        });
    }
}

    render(){
        return(
          <div>
          {this.state.getCurrentLocationWeather?<button onClick={this.getLocation} className="btn btn-secoundary">Get current location weather</button>:''}

          <form onSubmit={this.onFormSubmit} className="input-group">
        <input  className="form-control" placeholder="Enter address to get forecast for the day"
         onChange={this.onInputChange}
         value={this.state.term}
            />
         <span className="input-group-btn">
         {this. giveButtonType()}

        </span>
        </form>
        </div>);
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch)
}

function mapStateToProps(state){
    return {isLoading:state.loading}
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
