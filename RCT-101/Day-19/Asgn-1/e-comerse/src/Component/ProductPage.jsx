import { Box, Container, Img, SimpleGrid,Text } from "@chakra-ui/react"
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
        <SimpleGrid columns={[1,2,2,3]}>
            <Box>
                <Img src={data.imageURL} />
            </Box>
            <Box>
                <Container>
                    {data.description}
                </Container>
                <Text>{data.name}</Text>
                <Text>Price : Rs.{data.price}</Text>
            </Box>
        </SimpleGrid>
            </>
    )
}