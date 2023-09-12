import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";

const Container = styled.div`
    
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    font-weight: 500;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
`
const Button = styled.button`
    width: 90px;
    height: 40px;
    border: 1px solid #000;
`
const TopText = styled.div`
    font-size: 16px;
    text-decoration: underline;
`


export default function Cart(){


    return(
       <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <Title>YOUR CART</Title>
                <Top>
                    <Button>CONTINUE SHOPPING</Button>
                    <TopText>This is Your Cart</TopText>
                </Top>
            </Wrapper>
            <Footer/>
       </Container> 
    )
}