import React from "react";
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 20px;
    height: 70vh;
    align-items: center;
    position: relative;
    transition: 0.3s;
    &:hover {
    //text-decoration: underline; /* Underline on hover */
    transform: scale(1.05);
    cursor: pointer;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: blur(1.5px);
    
    
    
`

const Title = styled.h1`
    /* font-size: 3.5em; */
    color: white;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`

const Button = styled.button`
   
    /* font-size: 1.3em; */
    border-color: gray;
    padding: 8px;
    background-color:white;
    color: #615f5f;
    cursor: pointer;
    //box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    transition : 0.3s;
    &:hover {
    //text-decoration: underline; /* Underline on hover */
    transform: scale(1.05);
    cursor: pointer;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`

const Info = styled.div`
    position: absolute;
    width: 100%;
    height:100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export default function CatagoryItem({item}){

    return (
        <Container>
            <Image src={item.image}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button> 
            </Info>
        </Container>
    )
}