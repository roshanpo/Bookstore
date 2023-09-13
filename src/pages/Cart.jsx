import React, {useState} from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";

const Container = styled.div`
    
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */
`

const Title = styled.h1`
    font-weight: 500;
    //align-self: center;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:30px;
    //margin-left: 30px;
`
const Middle = styled.div`
    display: flex;
    //justify-content: center;
    align-items: flex-start;
    margin-bottom: 40px;
    //padding-left: 30px;
    //margin-left: 30px;
`
const Button = styled.button`
    width: 90px;
    height: 40px;
    border: 1px solid #000;
    background: transparent;
    cursor: pointer;
    &:hover{
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        //border: 2px solid #000;
    }
`
const CheckoutButton = styled(Button)`
    width: 150px;
    background-color: black;
    color: white;
    margin: 20px 20px 20px 20px;
`
const TopText = styled.span`
    font-size: 16px;
    margin-bottom: 50px;
    //text-decoration: underline;
    //flex: 1;
`
// const ProductText = styled.span`
//     font-size: 16px;
//     //margin-bottom:40px;
//     //flex: 2;
// `
// const Line = styled.div`
//   width: 85%; /* Width of the line, adjust as needed */
//   height: 1px; /* Thickness of the line */
//   background-color: #bbb8b8; /* Line color (black in this example) */
//   margin: 20px 0;
// `
const Product = styled.div`
    //padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    //flex: 1;
    margin-left: 15%;
`
const ProductInfo = styled.div`
    display: flex;
`
const ProductImage = styled.img`
    width: 150px;
    height: auto;
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`

const ProductName = styled.h2`
    font-weight: 500;
    
`
const ProductPrice = styled.span`
    font-size: 18px;
    color: gray;
`
const ProductDescription = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    //max-width: 150px;
    //flex: 0.8;
`
const Quantity = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    
`
const ProductQuantity = styled.div`
    display: flex;
    gap: 5px;
    border: 1px solid #000;
    width: 100px;
    height: 30px;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 10px;
    &:hover{
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        //border: 2px solid #000;
    }
    //margin-left: 24.5%;
    //flex-shrink: 3;
    //flex: 1;
`
const QuantityChangeButton = styled.button`
    width: 20px;
    display: flex;
    justify-content: center;
    background-color: transparent;
    border:none;
    cursor: pointer;
    
`
const Total = styled.div`
    display: flex ;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 15%;
`
const ProductTotal = styled.span`
    
    font-size: 20px;
    font-weight: 500;
    //margin-left: 34vh;
`
const Bottom = styled.div`
    display: flex;
    justify-content: flex-end;
`
export default function Cart(){
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity= () => {
        setQuantity(quantity + 1);
    };
    
    const decreaseQuantity = () => {
        if(quantity>1){
            setQuantity(quantity - 1);
        }
    };
    const Price = 990;
    const TotalPrice = quantity*Price;
    return(
       <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Top>
                    <Title>YOUR CART</Title>
                    <Button>CONTINUE SHOPPING</Button>
                </Top>
                <Middle>
                    <Product>
                        <TopText>PRODUCT</TopText>
                        <ProductInfo>
                            <ProductImage src="src/images/alittlelife.jpg"/>
                            <ProductDescription>
                                <ProductName>A Little Life</ProductName>
                                <ProductPrice>Rs.{Price}</ProductPrice>
                            </ProductDescription>
                        </ProductInfo>
                    </Product>
                    <Quantity>
                        <TopText>QUANTITY</TopText>
                        
                        <ProductQuantity>
                        <QuantityChangeButton onClick={decreaseQuantity}>-</QuantityChangeButton>
                            <span>{quantity}</span>
                            <QuantityChangeButton onClick={increaseQuantity}>+</QuantityChangeButton>
                        </ProductQuantity>
                    </Quantity>
                    <Total>
                        <TopText>TOTAL</TopText>
                        <ProductTotal>Rs.{TotalPrice}</ProductTotal>
                    </Total>
                </Middle>


                <Bottom>
                    <CheckoutButton>CHECKOUT NOW</CheckoutButton>
                </Bottom>
            </Wrapper>

            
            <Footer/>
       </Container> 
    )
}