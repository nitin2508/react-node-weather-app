import React ,{Component} from 'react';

 class GoogleMap extends Component{

     componentDidMount(){
         console.log(this.props);
         console.log(window)
         new window.google.maps.Map(this.refs.map,{
             zoom:14,
             center:{
                 lat:this.props.lat,
                 lng:this.props.lon
             }
         });
     }
     render(){
         return (<div ref="map"/>)
     }
 }

 export default GoogleMap;
