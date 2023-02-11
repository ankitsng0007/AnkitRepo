import { Box, SimpleGrid } from "@chakra-ui/react"
export const Layout=()=>{
    const items= new Array(12).fill(0).map((a,i)=>i+1);
    console.log(items);
    return(
        <Box>
            <SimpleGrid columns={{base:1,sm:2,md:3,lg:4,xl:5,"2xl":6}} spacing={2}>
            {items.map((el)=>(
                <Box key={el}>{el}</Box>
            ))}
            </SimpleGrid>
            </Box>
              /*<SimpleGrid columns={4} spacing={10}>
                <Box bg="red" height={10}></Box>
                <Box bg="red" height={10}></Box>
                <Box bg="red" height={10}></Box>
                <Box bg="red" height={10}></Box>
                <Box bg="red" height={10}></Box>
                <Box bg="red" height={10}></Box>
                <Box bg="red" height={10}></Box>
    </SimpleGrid>*/
    );
}