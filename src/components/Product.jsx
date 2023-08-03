//import { Container } from "@mui/material"
import react from "react"
//import { useState } from 'react';
import styled from 'styled-components'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
//import {items} from "../data"

const Image = styled.img`
    /*flex: 1; */
    width: 100%;
    height: 100%;
    object-fit: contain;
    
`;

const Container= styled.div`
    //flex: 1;
    display: flex;
    flex: wrap;
    height: 40vh;
    margin: 30px;
    gap:20px;
    /* :hover{
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    } */
    width: 20%; 
    align-items: center;
    /* height: 100%; */
    /* object-fit: contain; */
    //padding-bottom: 40px;

`
const Icons = styled.div`

`


export default function Product({item}){

    return(
       <Container>
            <Image src={item.image}/>
            <Icons>
                <ShoppingCartTwoToneIcon/>
            </Icons>
       </Container>
    )
}