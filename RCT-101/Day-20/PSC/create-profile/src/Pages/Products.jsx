import { Container } from "@chakra-ui/react";
import React, { useEffect } from "react";
import axios from "axios";

const getData=()=>{
    return axios.get(`http://localhost:8080/products`);
}
export const Products =()=>{
    useEffect(()=>{
        getData().then((res)=>console.log(res.data))
    },[])
    return(
        <Container maxW={{base:"full",lg:"container.xl"}}
        p={{base:2,lg:0}}>

        </Container>
    )
}