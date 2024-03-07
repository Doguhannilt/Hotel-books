import { configureStore } from "@reduxjs/toolkit";
import loggedReducer from '../redux/features/counter/isLogged';
import hotelReducer from '../redux/features/counter/viewData';
import { enableMapSet } from 'immer';


enableMapSet()
const store = configureStore({
    reducer: {
        logger: loggedReducer,
        hotel: hotelReducer,
      
    },
   
});

export default store;
