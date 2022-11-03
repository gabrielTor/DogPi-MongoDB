import { createSlice } from '@reduxjs/toolkit'

export const dogSlice = createSlice({
    name: 'dogs',
    initialState: {
        allDogs: [],
        details: {},
        found: [],
        allTemps: []
    },
    reducers: {
        getDogs: (state, action)=>{
            state.allDogs = action.payload
        },
        getDetails: (state, action)=>{
            state.details = action.payload
        },
        findDogs: (state, action)=>{
            state.found = action.payload
        },
        getTemps: (state, action)=>{
            state.allTemps = action.payload
        }
    }
})

export const { getDogs, getDetails, findDogs, getTemps } = dogSlice.actions
export default dogSlice.reducer