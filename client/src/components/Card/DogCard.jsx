import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'

function DogCard(props) {
  return (
    <Box>
        <Text>{props.name}</Text>
        <Image src={props.image} w={'20%'} h={'20%'}/>
        <Text>More Info</Text>
    </Box>
  )
}

export default DogCard