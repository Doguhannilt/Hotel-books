import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    hotels: []
};

const hotelSlice = createSlice({
    name: 'hotel',
    initialState,
    reducers: {
        addHotel(state, action) {
            state.hotels = [action.payload]
        },

    },
});

export const { addHotel, setErrorLog } = hotelSlice.actions;

export default hotelSlice.reducer;
