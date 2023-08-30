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
    display: flex;
    flex-direction: column;
    flex: wrap;
    //height: 40vh;
    margin: 30px;
    gap:20px;
    //row-gap: 20px;
    /* :hover{
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    } */
    //cursor: pointer;
    //width: 20%; 
    align-items: center;
    //height: 100%;
    /* object-fit: contain; */
    padding-bottom: 20px;
    transition: transform 0.3s;
    &:hover {
    //text-decoration: underline; /* Underline on hover */
    transform: scale(1.05);
    cursor: pointer;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

`


const Button = styled.button`
    //border: none;
    font-size: 18px;
    background-color: transparent;
    display: flex;
    gap: 5px;
    cursor: pointer;
    align-items: center;
    padding: 5px;
   // box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`
const Name = styled.span`
    font-size: 20px;
    font-weight: 400;
     ${Container}:hover & {     //underlines the name if you hover the container
    text-decoration: underline; /* Underline on hover */
    cursor: pointer;
  }
    
`

const Price = styled.span`
    font-size: 18px;
    font-weight: 400;
`
// const Icons = styled.div`

// `


export default function Product({item}){

    return(
       <Container>
            <Image src={item.image}/>
            <Name>{item.name}</Name>
            <Price>{item.price}</Price>
                <Button>Add To Cart
                <ShoppingCartTwoToneIcon/>
                </Button>
       </Container>
    )
}