//import { Container } from "@mui/material"
import react from "react"
//import { useState } from 'react';
import styled from 'styled-components'
//import {items} from "../data"

const Image = styled.img`
    /* display: flex;
    flex: 1; */
    width: 100%;
    height: 100%;
    object-fit: contain;
    
`;

const Container= styled.div`
    flex: 1;
    height: 30vh;
    margin: 20px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    width: 100%; 
    /* height: 100%; */
    /* object-fit: contain; */
    padding-bottom: 40px;

`


export default function Product({item}){

    return(
       <Container>
            <Image src={item.image}/>
       </Container>
    )
}