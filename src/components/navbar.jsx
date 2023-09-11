import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from "styled-components";
import { blue } from '@mui/material/colors';

// const Language = styled("span")({
//   cursor : "pointer"
// });
    
const Language = styled('div')({
  cursor : 'pointer',
  color : 'blueviolet',
})

const Navbar = styled('nav')({
  height: '60px'
  // backgroundColor: 'rgb(178, 182, 179)',
})

const Wrapper = styled('div')({
  padding: '0px 20px',
  display: 'flex',
  alignItems : 'center',
  justifyContent : 'space-between'
  
})

const SearchContainer = styled('div')({
  border : '0.5px solid lightgrey',
  display: 'flex',
  alignItems: 'center',
  // padding : '5px',
  marginLeft : '25px'
})

const Input = styled('input')({
  border: 'none'
})

const Left = styled('div')({
  display : 'flex',
  flex: '1'
})

const Center = styled('div')({
  flex: '1',
  textAlign: 'center'
})

const Logo = styled('h1')({
  fontWeight:'bold',
  fontSize:'25px'

})

const Right = styled('div')({
  flex: '1',
  display : 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
})

const MenuItem = styled.div`
  font-weight: 14px;
  cursor: pointer;
  margin-left: 30px;
`

export default function navbar() {
  //const [count, setCount] = useState(0)

  return (
    <>
     <Navbar>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input></Input>
              <SearchOutlinedIcon style={{color: 'gray', fontSize : '20'}}/>
            </SearchContainer>
          </Left>
          <Center>
            <Logo>ROSHAY</Logo>
          </Center>
          <Right>
            <MenuItem>LOGIN</MenuItem>
            <MenuItem>SIGN UP</MenuItem>
            <MenuItem> 
              <Badge badgeContent={4} color="primary"/>
              <ShoppingCartOutlinedIcon/>
            </MenuItem>
          </Right>
        </Wrapper>
      </Navbar>
    </>
  )

}

