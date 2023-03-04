import { FormControl, FormLabel, Grid, GridItem, Heading, Input, Select, Text, Textarea, VStack } from "@chakra-ui/react";
import React from "react";

export const ProfileForm=()=>{
    const handleChange=()=>{

    }
    return(
        <VStack
        h="full"
        w="full"
        p={10}
        alignItems="flex-start"
        bg="orange.100">
            <VStack>
                <Heading>Create Profile Here</Heading>
                <Text>Please Fill in All Detial</Text>
                <Grid
  h='200px'
  templateColumns='repeat(2, 1fr)'
  gap={4}
>
  <GridItem colSpan={1}>
    <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input 
        placeholder="Name"
        type="text"
        name="name"
        onChange={handleChange}/>
    </FormControl>
  </GridItem>
  <GridItem colSpan={1}>
    <FormControl isRequired>
        <FormLabel>Phone</FormLabel>
        <Input 
        placeholder="Phone"
        type="number"
        name="phone"
        onChange={handleChange}/>
    </FormControl>
  </GridItem>
  <GridItem colSpan={1}>
    <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input 
        placeholder="Email"
        type="email"
        name="email"
        onChange={handleChange}/>
    </FormControl>
  </GridItem>
  <GridItem colSpan={1}>
    <FormControl isRequired>
        <FormLabel>Age</FormLabel>
        <Input 
        placeholder="Age"
        type="text"
        name="age"
        onChange={handleChange}/>
    </FormControl>
  </GridItem>
  <GridItem colSpan={1}>
    <FormControl isRequired>
        <FormLabel>Adress</FormLabel>
        <Textarea
        placeholder="Adress"
        type="text"
        name="address"
        onChange={handleChange}
        resize="none"/>
    </FormControl>
  </GridItem>
  <GridItem colSpan={1}>
    <FormControl isRequired>
        <FormLabel>Country</FormLabel>
        <Select>
        placeholder="Country"
        type="text"
        name="country"
        onChange={handleChange}
        <option>India</option>
        <option>UAE</option>
        <option>USA</option>
        <option>China</option>
        <option>Canada</option>
        </Select>
    </FormControl>
  </GridItem>
  <GridItem colSpan={1}>
    <FormControl isRequired>
        <FormLabel>Profile Pic</FormLabel>
        <Input 
        placeholder="Profile-pic"
        type="file"
        name="name"
        onChange={handleChange}/>
    </FormControl>
  </GridItem>
</Grid>
            </VStack>
        </VStack>
    )
}