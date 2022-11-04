import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInfo } from '../../Redux/dogsActions'
import { Text, Image, Box } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

function DogInfo() {

    const params = useParams()
    const dispatch = useDispatch()
    const info = useSelector(state => state.dogs.details)

    useEffect(()=>{
        dispatch(getInfo(params.id))
    }, [dispatch, params])

  return (
    <Box>
        <Text>{info.name}</Text>
        <Image src={info.image} w={'40%'} h={'40%'}/>
    </Box>
  )
}

export default DogInfo;