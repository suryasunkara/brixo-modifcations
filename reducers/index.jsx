import { combineReducers } from 'redux';
import Customizer from './customizer.reducer';
import  baseurl from './baseurlreducer';

import  appreducers from './appReducers';


const reducers = combineReducers({
    Customizer,
    baseurl,
    appreducers,
});

export default reducers;