import {Input,Button, Heading, Container, Stack, FormControl, FormLabel, Box, HStack, PinInput, PinInputField} from "@chakra-ui/react";
import { useState } from "react";

export const Form=()=>{
    const [loading,setLoading]=useState(false);
    const [otp,setOtp]=useState("");
    return(
        <Container>
        <Heading>Form</Heading>
        <FormControl isRequired>
            <FormLabel>Email</FormLabel>
        <Input type="email" id="email" placeholder="Enter Email Adress"/>
        <FormLabel>Password</FormLabel>
        <Input type="password" id="pass" placeholder="Enter Password"/>
            <Button 
                isLoading={loading} 
                onClick={()=>{
                setLoading(true);
                setTimeout(()=>{
                    setLoading(false)
                },1000)
            }}>Sign Up</Button>
            </FormControl>
        <Box>
            <HStack>
                <PinInput otp value={otp} onChange={(value)=>{setOtp(value)}}>
                    <PinInputField/>
                    <PinInputField/>
                    <PinInputField/>
                    <PinInputField/>
                </PinInput>
            </HStack>
        </Box>
        <box><Heading>{otp}</Heading></box>
        </Container>
    )
}