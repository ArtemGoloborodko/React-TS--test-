import { combineReducers } from '@reduxjs/toolkit';
import textReducer from './textReducer';
import textReducerHowIt from './textReducerHowIt';
import textReducerFeedBack from './textReducerFeedBack';
import textReducerAccordion from './textReducerAccordion';
import textReducerInterviwee from './textReducerInterviwee';



const rootReducer = combineReducers({
    text: textReducer,
    info: textReducerHowIt,
    feedback: textReducerFeedBack,
    accordion: textReducerAccordion,
    interviwee: textReducerInterviwee,

});

export default rootReducer;
