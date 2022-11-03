import axios from 'axios'
import { getDogs, getDetails, findDogs, getTemps } from './dogsSlice'

export function getAllDogs(){
    return async(dispatch) =>{
        try {
            const resp = await axios.get('https://dog-react-app.herokuapp.com/breeds')
            await dispatch(getDogs(resp.data))
        } catch (error) {
            console.error(error)
        }
    }
}

export function getInfo(id){
    return async(dispatch) =>{
        try {
            const resp = await axios.get('https://dog-react-app.herokuapp.com/dog/' + id)
            await dispatch(getDetails(resp.data))
        } catch (error) {
            console.error(error)
        }
    }
}

export function findBreeds(breed){
    return async(dispatch) =>{
        try {
            const resp = await axios.get('https://dog-react-app.herokuapp.com/breeds?breed=' + breed)
            await dispatch(findDogs(resp.data))
        } catch (error) {
            alert(error.response.data)
        }
    }
}

export function getAllTemps(){
    return async(dispatch) =>{
        try {
            const resp = await axios.get('https://dog-react-app.herokuapp.com/temps')
            await dispatch(getTemps(resp.data))
        } catch (error) {
            console.error(error)
        }
    }
}