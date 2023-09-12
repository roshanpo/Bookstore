import React, {useState} from "react"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"



const Wrapper = styled.div`
    display: flex;
    //width: 800px;
    //flex-wrap: wrap;
    //justify-content:center;
    gap: 100px;
    margin: 50px 100px 50px 100px;
    
`

const ImageContainer = styled.div`
  
`

const Image = styled.img`
    width: 250px;
    height: auto;
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`

const Description = styled.div`

`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const GreyText = styled.span`
    color: gray;
    font-weight: 500;
`

const Title = styled.h1`
    
`


const Price = styled.span`
    font-size: 30px;
`

const CartButton = styled.button`
    //border: none;
    font-size: 18px;
    background-color: transparent;
    display: flex;
    gap: 5px;
    cursor: pointer;
    align-items: center;
    padding: 5px;
    width: 200px;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 15px;
   // box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`
const ShopButton = styled.button`
    //border: none;
    font-size: 18px;
    background-color: teal;
    color: white;
    display: flex;
    gap: 5px;
    cursor: pointer;
    align-items: center;
    padding: 5px;
    width: 200px;
    justify-content: center;
   // box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`
const QuantityButton = styled.button`
    width: 20px;
    display: flex;
    justify-content: center;
    background-color: transparent;
    border:none;
    cursor: pointer;

`

const QuantityWrapper = styled.div`
    display: flex;
    gap: 5px;
    border: 1px solid #000;
    width: 100px;
    height: 30px;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 10px;
`





export default function Product(){
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity= () => {
        setQuantity(quantity + 1);
    };
    
    const decreaseQuantity = () => {
        if(quantity>0){
            setQuantity(quantity - 1);
        }
    };
    return(
        <>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <ImageContainer>
                    <Image src="src/images/alittlelife.jpg"/>
                </ImageContainer>
                <InfoContainer>
                    <GreyText>Hanya Yanagihara</GreyText>
                    <Title>A Little Life</Title>
                    <GreyText>ISBN: 9781447294832</GreyText>
                    <GreyText>Quantity</GreyText>
                    <QuantityWrapper>
                        <QuantityButton onClick={decreaseQuantity}>-</QuantityButton>
                        <span>{quantity}</span>
                        <QuantityButton onClick={increaseQuantity}>+</QuantityButton>
                    </QuantityWrapper>
                    <Price>Rs 990</Price>
                    <CartButton>Add To Cart</CartButton>
                    <ShopButton>Shop Now</ShopButton>
                    <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus sunt nobis voluptatem 
                    aperiam nemo possimus, eaque tempora? Eos sapiente ipsum dolores consequatur? 
                    Labore ducimus nostrum reiciendis! Tempore repudiandae sint dolorum!
                    </Description>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </>
    )
}