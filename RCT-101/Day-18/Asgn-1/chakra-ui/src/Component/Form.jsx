import {Input,Button, Heading, Container, Stack, FormControl, FormLabel} from "@chakra-ui/react";

export const Form=()=>{
    return(
        <Container>
        <Heading>Form</Heading>
        <FormControl isRequired>
            <FormLabel>Email</FormLabel>
        <Input type="email" id="email" placeholder="Enter Email Adress"/>
        <FormLabel>Password</FormLabel>
        <Input type="password" id="pass" placeholder="Enter Password"/>
            <Button onClick={()=>{}}>Sign Up</Button>
        </FormControl>
        </Container>
    )
}