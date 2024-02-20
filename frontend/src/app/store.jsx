import { configureStore } from "@reduxjs/toolkit";
import logged from '../redux/features/counter/isLogged'

export const store = configureStore({
    reducer: {
        logger : logged
    }
})

export default store;