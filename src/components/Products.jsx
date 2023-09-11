import react from "react"
import { useState } from 'react';
import styled from 'styled-components'
import {items} from "../data"
import Product from "./Product"

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    gap: 20px;
    /* :hover{
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
    cursor: pointer; */
    /* margin: 20px; */
`


export default function Products(){

    return(
        <Container>
            {items.map((item)=>
            <Product key={item.id} item={item} />
            )}
        </Container>
    )
}