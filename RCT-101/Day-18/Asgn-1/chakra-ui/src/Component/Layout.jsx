import { Box, SimpleGrid } from "@chakra-ui/react"
export const Layout=()=>{
    return(
        <Box>
            <SimpleGrid columns={4} spacing={10}>
                <Box bg="red" height={10}></Box>
                <Box bg="red" height={10}></Box>
                <Box bg="red" height={10}></Box>
                <Box bg="red" height={10}></Box>
                <Box bg="red" height={10}></Box>
                <Box bg="red" height={10}></Box>
                <Box bg="red" height={10}></Box>
            </SimpleGrid>
        </Box>
    )
}