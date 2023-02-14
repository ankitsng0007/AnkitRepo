import { Box, Button, Img, SimpleGrid } from "@chakra-ui/react"
import axios, {Axios} from "axios";
import { useEffect, useState } from "react";

export const Listing=()=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/items")
        .then(res=>setData(res.data))
    },[])
    console.log(data);
    return(
        <>
        {/*<Button variant={["sm","base","md"]}>Click Me</Button>*/}
        <SimpleGrid columns="2" spacing={5}>
            {
                data && data.map((el)=>{
                    return(
                        <Box key={el.id}>
                            <Img src="el.imageURL" boxSize="100px"/>
                            {el.name}
                        </Box>
                    )
                })
            }
        </SimpleGrid>
        </>
    )
}