import {Input,Button, Heading, Container, Stack,
     FormControl, FormLabel, Box, 
     HStack, PinInput, PinInputField, Select,option, Menu, MenuButton, MenuList, MenuItem} from "@chakra-ui/react";
import { useState } from "react";
import { ChevronDownIcon} from "@chakra-ui/icons";

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
        <box>
            <Select>
                <option value="1">option 1</option>
                <option value="2">option 2</option>
                <option value="3">option 3</option>
            </Select>
        </box>
        <Box>
            <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Actions
            </MenuButton>
            <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a copy</MenuItem>
                <MenuItem>Mark As Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
            </MenuList>
            </Menu>
        </Box>
        </Container>
    )
}