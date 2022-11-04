import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function DogCard(props) {
  return (
    <Box>
        <Text>{props.name}</Text>
        <Image src={props.image} w={'20%'} h={'20%'}/>
        <Text>
          <Link to={`/details/${props.id}`}>
          More Info
          </Link>
        </Text>
    </Box>
  )
}

export default DogCard