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
    border: 1px solid #000;
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
    &:hover{
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        //border: 2px solid #000;
    }
`
const ShopButton = styled.button`
    border: 1px solid #000;
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
    &:hover{
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        //border: 2px solid #000;
    }
    margin-bottom: 10px;
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
    &:hover{
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        //border: 2px solid #000;
    }
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
                    <ShopButton>Buy Now</ShopButton>
                    <Description>When four classmates from a small Massachusetts college move to New York to make their way, they're broke,
                         adrift, and buoyed only by their friendship and ambition. There is kind, handsome Willem, an aspiring actor; JB, 
                         a quick-witted, sometimes cruel Brooklyn-born painter seeking entry to the art world; Malcolm, 
                        a frustrated architect at a prominent firm; and withdrawn, brilliant, enigmatic Jude, who serves as their center
                         of gravity.<br/>
                         <br/>

                        Over the decades, their relationships deepen and darken, tinged by addiction, success, and pride. Yet their greatest
                        challenge, 
                        each comes to realize, is Jude himself, by midlife a terrifyingly talented litigator yet an increasingly broken man,
                        his mind and body scarred by an unspeakable childhood, and haunted by what he fears is a degree of trauma that he’ll 
                        not only be unable to overcome—but that will define his life forever.
                    </Description>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </>
    )
}