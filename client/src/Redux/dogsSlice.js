import { createSlice } from '@reduxjs/toolkit'

export const dogSlice = createSlice({
    name: 'dogs',
    initialState: {
        allDogs: [],
        details: {}
    },
    reducers: {
        getDogs: (state, action)=>{
            state.allDogs = action.payload
        },
        getDetails: (state, action)=>{
            state.details = action.payload
        }
    }
})

export const { getDogs, getDetails } = dogSlice.actions
export default dogSlice.reducer