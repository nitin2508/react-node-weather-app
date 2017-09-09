import React ,{Component} from 'react';
const googleMapkey = 'AIzaSyAvcaVn8yGHwikfsUcUEva5holFb_UOieI';

 class GoogleMap extends Component{

     componentDidMount(){
         console.log(this.props);
         console.log(window)
         new window.google.maps.Map(this.refs.map,{
             zoom:14,
             center:{
                 lat:this.props.lat,
                 lng:this.props.lon
             },
             key:googleMapkey
         });
     }
     render(){
         return (<div ref="map"/>)
     }
 }

 export default GoogleMap;
