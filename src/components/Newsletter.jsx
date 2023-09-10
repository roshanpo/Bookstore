import React from 'react'
import styled from "styled-components"
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    padding: 20px;
    height: 200px;
    background-color: white;
    justify-content: center;
`
const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 4px;
    height: 20%;
    width: 40%;
`

const Title = styled.span`
    font-size:40px;
    font-weight: 600;
`

const Text = styled.span`
    font-size: 20px;
    font-weight: 400;
`

const Input = styled.input`
    //border: none;
    border: 2px;
    height: 30px;
    width: 350px;
    background-color: white;
    font-size: 20px;
    padding-left: 5px;

`

const Submit = styled.button`
    border: 2px;
    height: 32px;
    width: 45px;
    background-color: teal;
    cursor: pointer;
`




export default function Newsletter(){


    return(
        <Container>
            <Title>NewsLetter</Title>
            <Text>Get Timely Updates About Your Favourite Books</Text>
            <InputContainer>
                <Input placeholder='Your Email'/>
                <Submit>
                    <SendRoundedIcon/>
                </Submit>
            </InputContainer>   
        </Container>

    )
}