import { Box, Img, SimpleGrid } from "@chakra-ui/react"
import { useState,useEffect } from "react"

export const ProductPage=()=>{
    const [id,setId] = useState("");
    useEffect({},[])
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