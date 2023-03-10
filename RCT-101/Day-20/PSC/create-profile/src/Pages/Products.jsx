import { Box, Text, Container, Grid, GridItem, Image, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

const getData=()=>{
    return axios.get(`http://localhost:8080/products`);
}
export const Products =()=>{
    const [data,setData] = useState([]);

    useEffect(()=>{
        getData().then((res)=>setData(res.data))
    },[])
    console.log(data);
    return(
        <Container maxW={{base:"full",lg:"container.xl"}}
        p={{base:2,lg:0}}>
        <Grid templateColumns={
            {base:"repeat(1,1fr)",
            md:"repeat(2,1fr)",
            lg:"repeat(3,1fr)"}} 
            gap={5}>
          {data && data.map((el)=>(
            <GridItem key={el.id}>
                <Box boxShadow='outline' p='6' rounded='md' bg='white' height="550">
                <VStack>
                  <Box>
                    <Image src={el.image} 
                    alt="product-img"
                    boxSize="sm"/>
                  </Box>
                  <Box>
                    <Text fontSize="xl" color="blue">{el.title}</Text>
                  </Box>
                  <Box>
                    <Text fontSize="2xl" color="red" as="b">INR : {el.price}</Text>
                  </Box>
                </VStack>
                </Box>
            </GridItem>
          ))}
        </Grid>
        </Container>
    )
}