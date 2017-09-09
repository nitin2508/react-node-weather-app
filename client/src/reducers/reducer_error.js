import {ERROR} from '../actions/index';
import Notifications, {notify} from 'react-notify-toast';

export default function(state =[] ,action){
     if (action.error) {
    action.type = 'ERROR'; // change the type
  }
    switch(action.type){
        case ERROR:
             notify.show("Unable to find weather for this address", "error", 3000);
        return state;
}
return state;
}
