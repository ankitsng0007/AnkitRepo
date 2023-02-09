import {Box,Input,Button, Heading, Container, Stack} from "@chakra-ui/react";

export const Form=()=>{
    return(
        <Container>
        <Heading>Form</Heading>
        <Stack gap="1rem">
        <Box>
        <Input type="email" placeholder="Enter Email Adress"/>
        <Input type="password" placeholder="Enter Password"/>
        </Box>
        <Box>
            <Button>Sign Up</Button>
        </Box>
        </Stack>
        </Container>
    )
}