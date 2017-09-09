import {LOADING} from '../actions/index';

export default function(state =false ,action){
    switch(action.type){
        case LOADING:
        return true;
        default:
        return false;
}
return state;
}