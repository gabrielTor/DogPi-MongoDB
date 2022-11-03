import { Box } from '@chakra-ui/react'
import DogCard from '../Card/DogCard';
import { getAllDogs } from '../../Redux/dogsActions'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function Home() {

    const dispatch = useDispatch()
    const allDogs = useSelector(state => state.dogs.allDogs)
    
    useEffect(()=>{
        dispatch(getAllDogs())
    }, [dispatch])

    return (
        <Box>
            { allDogs?.map(dog => (
                <DogCard key={dog.id} name={dog.name} image={dog.image} />
            ))
            }
        </Box>
    )
}

export default Home;