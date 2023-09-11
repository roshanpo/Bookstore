import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


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
    margin-left: 40px;
    flex: 1;
`
const Right = styled.div`
    flex: 1;
`
const LogoText = styled.div`
    font-size: 50px;
    font-weight: 500;
    color : white;
    padding-bottom: 10px;
`
const HeaderText = styled.div`
    font-size: 30px;
    font-weight: 400;
    color : white;
    padding-bottom: 10px;
`
const NormalText = styled.div`
    font-size: 20px;
    font-weight: 400;
    color: white;
`

const SocialIcons = styled.div`
    display: flex;
    width: 120px;
    justify-content: space-between;
    margin-top: 30px;
`

const List = styled.li`
    display: flex;
    font-size: 20px;
    font-weight: 400;
    color: white;
    list-style-type: none;
    margin-bottom: 10px;
`


const ContactList = styled.li`
    display: flex;
    gap: 10px;
    font-size: 20px;
    font-weight: 400;
    color: white;
    list-style-type: none;
    margin-bottom: 10px;
    
`

export default function Footer(){


    return(
        <Container>
            <Left>
                <LogoText>ROSHAY</LogoText>
                <NormalText>
                Discover genuine books, obtained directly from international publishers. Show appreciation for the author's dedication with each acquisition.  
                </NormalText>
                <SocialIcons>
                <InstagramIcon/>
                <PinterestIcon/>
                <TwitterIcon/>
            </SocialIcons>
            </Left>
            <Center>
                <HeaderText>Quick Links</HeaderText>
                <List>Home</List>
                <List>Order</List>
                <List>Search</List>
                <List>Wishlist</List> 
                <List>Our Story</List>  
                
            </Center>
            <Right>
                <HeaderText>Contact</HeaderText>
                <ContactList><CallOutlinedIcon/> +977 9754367423</ContactList>
                <ContactList><EmailOutlinedIcon/> contact@roshay.com</ContactList>
                <ContactList><LocationOnOutlinedIcon/> Patan, Bagmati, Nepal</ContactList>
            </Right>
        </Container>
    )
}