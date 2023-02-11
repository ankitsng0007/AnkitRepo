import { Box, SimpleGrid } from "@chakra-ui/react"
export const Layout=()=>{
    const items= new Array(12).fill(0).map((a,i)=>i+1);
    console.log(items);
    return(
        <Box>
            {items.map((el)=>(
                
            ))}
            </Box>

            {/*<SimpleGrid columns={4} spacing={10}>
                <Box bg="red" height={10}></Box>
                <Box bg="red" height={10}></Box>
                <Box bg="red" height={10}></Box>
                <Box bg="red" height={10}></Box>
                <Box bg="red" height={10}></Box>
                <Box bg="red" height={10}></Box>
                <Box bg="red" height={10}></Box>
    </SimpleGrid>*/}
        
    )
}