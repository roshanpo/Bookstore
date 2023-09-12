import React from "react";
import styled from "styled-components";


const Container = styled.div`
    overflow: hidden;
`

const Title = styled.h2`
    margin-top: 0px;
    font-weight: 500;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background:linear-gradient(rgba(255,255,255,0.3),
                            rgba(255,255,255,0.3)),
     url("src/images/login.jpg") center;
    background-size: cover;  
`


const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 25%;
    height: 40%;
    padding: 20px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`
const Form = styled.form`
 
`

 const Link = styled.a`
    font-size: 12px;
    margin: 10px 0px 0px 5px;
    text-decoration: underline;
    cursor: pointer;
`

const Input = styled.input`
    flex: 1;
    min-width: 93%;
    height: 30px;
    margin: 20px 10px 0px 5px;
    border-radius: 5px;
    font-size: 16px;
    border: 1px solid #000;
`
const Button = styled.button`
    min-width: 95%;
    height: 35px;
    margin: 20px 10px 0px 5px;
    background-color: teal;
    color: white;
    border: 1px solid #000;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;

`


export default function Login(){


    return(
        <Container>
        <Wrapper>
            <FormContainer>
            <Title>LOG IN</Title>
                <Form action="">
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Password"/>
                    <Button type="submit">LOG IN</Button>
                    <Link>Forgot your Password?</Link><br/>
                    <Link>Don't Have an Account? Register Here</Link>
                </Form> 
            </FormContainer>
        </Wrapper>
        </Container>
    )
}