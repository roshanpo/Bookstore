import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../components/Products";
import styled from "styled-components";
import Newsletter from "../components/Newsletter";



const Container = styled.div`
    display: flex;
    //align-items: center;
    justify-content: center;
`

const Select = styled.select`
    width: 150px;
    padding: 10px;
    font-size: 15px;
    border-radius: 4px;
`
const Option = styled.option`
    font-size: 15px;
`

const Title = styled.h1`
    margin-left: 20px;

`

const Sort = styled.div`
    font-size: 20px;
    font-weight: 500;
    
`
const SortContainer = styled.div`
    display: flex;
    gap: 10px;
    justify-content: end;
    margin-right: 75px;
    align-items: center;
`



export default function ProductList(){

    return(
        <>
            <Announcement/>
            <Navbar/>
                <Title>All Books</Title>
                <SortContainer>
                    <Sort>Sort By</Sort>
                    <Select>
                        <Option disabled selected>Sort</Option>
                        <Option>A-Z</Option>
                        <Option>Newest</Option>
                        <Option>Price: High to Low</Option>
                        <Option>Price: Low to High</Option>    
                    </Select>
                </SortContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </>
    )
}