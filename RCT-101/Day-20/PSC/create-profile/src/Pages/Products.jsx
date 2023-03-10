import { Box, Container, Grid, GridItem, Image, VStack } from "@chakra-ui/react";
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
        <Grid templateColumns={{ base:1, md:2, lg:3 }}>
          {data && data.map((el)=>(
            <GridItem key={el.id}>
                <VStack>
                  <Box>
                    <Image src={el.image} alt="product-img"/>
                  </Box>
                  <Box>
                    {el.title}
                  </Box>
                </VStack>
            </GridItem>
          ))}
        </Grid>
        </Container>
    )
}