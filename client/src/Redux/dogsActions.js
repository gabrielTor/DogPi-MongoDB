import axios from 'axios'
import { getDogs, getDetails } from './dogsSlice'

export default function getAllDogs(){
    return async(dispatch) =>{
        try {
            const resp = await axios.get('http://localhost:3001/breeds')
            await dispatch(getDogs(resp.data))
        } catch (error) {
            console.error(error)
        }
    }
}