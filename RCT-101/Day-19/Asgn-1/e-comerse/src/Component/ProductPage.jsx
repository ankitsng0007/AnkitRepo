import { Box, Img, SimpleGrid } from "@chakra-ui/react"
import { useState,useEffect } from "react";
import axios from "axios";

export const ProductPage=()=>{
    const [data,setData]=useState("");
    useEffect(()=>{
        axios.get(`http://localhost:8080/items/${(window.location.href).split("items/")[1]}`)
        .then(res=>setData(res.data))
    },[])
    console.log(data);
    return(
        <>
        <h1>Product</h1>
        <SimpleGrid>
            <Box>
                <Img src="" />
            </Box>
            <Box></Box>
        </SimpleGrid>
            </>
    )
}