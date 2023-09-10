import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    //background-color: #b5d3e6;
    background-color: teal;
    height: 300px;
    box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`
const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
`
const HeaderText = styled.div`
    font-size: 40px;
    font-weight: 500;
    color : white;
    padding-bottom: 10px;
`
const NormalText = styled.div`
    font-size: 20px;
    font-weight: 400;
    color: white;
`

export default function Footer(){


    return(
        <Container>
            <Left>
                <HeaderText>ROSHAY</HeaderText>
                <NormalText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </NormalText>
            </Left>
            <Center>
                <NormalText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</NormalText>
            </Center>
            <Right></Right>
        </Container>
    )
}