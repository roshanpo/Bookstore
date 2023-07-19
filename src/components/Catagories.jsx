import React from "react";
import { styled } from "styled-components";
import {catagories} from "../data.js"
import CatagoryItem from "./CatagoryItem";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-evenly;
`


export default function Catagories(){

    return (
        <Container>
            {catagories.map(item => 
                <CatagoryItem key={item.id} item={item} />
                )}
        </Container>
    )
}