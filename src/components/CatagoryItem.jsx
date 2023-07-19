import React from "react";
import styled from 'styled-components'

const Container = styled.div``

const Image = styled.img``

const Title = styled.h1``

const Button = styled.button``

const Info = styled.div``

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