import react from "react"
import { useState } from 'react';
import styled from 'styled-components'
import {items} from "../data"
import Product from "./Product"

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
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