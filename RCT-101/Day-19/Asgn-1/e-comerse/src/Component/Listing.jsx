import { Box, Button, Center, Img, SimpleGrid, Text } from "@chakra-ui/react"
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Listing=()=>{
    const [data,setData]=useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:8080/items")
        .then(res=>setData(res.data))
    },[])
    console.log(data);
    return(
        <>
        {/*<Button variant={["sm","base","md"]}>Click Me</Button>*/}
        <SimpleGrid columns={[1,2,2,3]} spacing={5}>
            {
                data && data.map((el)=>{
                    return(
                        <Box key={el.id}>
                            <Img src={el.imageURL} boxSize="100px" />
                            <Text align="left">{el.name}</Text>
                        </Box>
                    )
                })
            }
        </SimpleGrid>
        </>
    )
}