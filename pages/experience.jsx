import { Box,Text } from '@chakra-ui/react'
import React from 'react'

const Experience = () => {
  return (
    <div>
    
    <Box style = {{border : "2px solid black",borderRadius : "10px",}}  mt= {8} py = {4} pl = {4} mb = {4}>
               
                <Text fontWeight="bold">1. Mern Full Stack Developer</Text>
                <p>Bengaluru : May 2021 - Present</p>
                <Box mt = {8}>
                <Text fontWeight="bold">2. Bechlor of Science (Physics)</Text>
                <p>Govt College Nalagarh : 2017 - 2021</p>
                </Box>
                <Box mt = {8}>
                <Text fontWeight="bold">3. Intermediate (Science)</Text>
                <p>GSSS Diggal : 2016 - 2017</p>
                </Box>
             
                
            </Box>
    
    </div>
  )
}

export default Experience