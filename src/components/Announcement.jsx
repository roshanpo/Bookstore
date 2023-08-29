import { teal } from '@mui/material/colors'
import React from 'react'
import styled from 'styled-components'


const Container = styled('div')({
    height : '30px',
    backgroundColor : 'teal',
    color : 'white',
    textAlign : 'center',
    justifyContent:'center',
    wordSpacing: '3px',
    paddingTop: '3px',
})


export default function Announcement(){


    return (
        <div>
        <Container>Super Deal! 50% off on orders over $500</Container>
        </div>
    )
}