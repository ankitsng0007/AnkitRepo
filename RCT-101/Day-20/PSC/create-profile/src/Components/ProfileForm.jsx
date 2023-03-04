import { FormControl, FormLabel, Grid, GridItem, Heading, Input, Text, VStack } from "@chakra-ui/react";
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
        <FormLabel>Name</FormLabel>
        <Input 
        placeholder="Name"
        type="text"
        name="name"
        onChange={handleChange}/>
    </FormControl>
  </GridItem>
</Grid>
            </VStack>
        </VStack>
    )
}