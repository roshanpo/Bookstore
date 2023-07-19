import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { sliderItems } from '../data';

const Container = styled('div')({
    width : '100%',
    height : '100vh',
    display : 'flex',
    // backgroundColor: 'rgb(28, 146, 167)',
    position : 'relative',
    overflow: 'hidden'
})

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props)=>props.slideIndex * -100}vw);

`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`
const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
`

const Image = styled.img`
    height: 80%;
`
const Infocontainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Description = styled.p`
    font-size: 20px;
    font-weight: 500;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`
const Arrow = styled.div`
    width: 50px;
    height : 50px;
    border-radius: 50%;
    background-color : white;
    display : flex;
    align-items : center;
    justify-content: center;
    position: absolute;
    top: 0px;
    bottom:0px;
    left:${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`


export default function Slider(){
    const[slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 3)
        }
        else if (direction=== "right"){
            setSlideIndex(slideIndex< 3 ? slideIndex +1 : 0)
        }
    }
    return (
        <Container>
            <Arrow direction = "left" onClick={() => handleClick('left')}>
                <KeyboardArrowLeftOutlinedIcon/>
            </Arrow>
            <Wrapper slideIndex ={slideIndex}>
                {sliderItems.map((item) => (
                    // key={item.id}

                    <Slide key={item.id} bg = {item.bg}>
                        {/* bg = {item.bg} */}
                        <ImageContainer>
                            <Image src={item.image}/>
                        </ImageContainer>
                        <Infocontainer>
                            <Title>{item.title}</Title>
                            <Description>{item.description}</Description>
                            <Button>SHOP NOW</Button>
                        </Infocontainer>
                    </Slide>
                ))}    
            </Wrapper>
            <Arrow direction = 'right' onClick={() => handleClick('right')}>
                <KeyboardArrowRightOutlinedIcon/>
            </Arrow>
            
        </Container>
    )
}