import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    statement: false
}

const isLoggedSlice = createSlice({
    name: "LoginStatement",
    initialState,
    reducers:{
        trueStatement(state) {
            console.log("trueStatement is called");
             state.statement = true
        },
        falseStatement(state){
            state.statement = false
        }
    }
})

export const { trueStatement } = isLoggedSlice.actions; 
export default isLoggedSlice.reducer;