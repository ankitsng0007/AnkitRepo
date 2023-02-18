import { Box, Img, SimpleGrid } from "@chakra-ui/react"
import { useState,useEffect } from "react";
import axios from "axios";

export const ProductPage=()=>{
    const [id,setId]=useState("");
    useEffect(()=>{
        console.log(window.location.href);
    },[])
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