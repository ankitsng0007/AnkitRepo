import { Button, FormControl, FormLabel, Grid, GridItem, Heading, Input, Select, Text, Textarea, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const initState={
  name:"",
  phone:"",
  email:"",
  age:"",
  adress:"",
  country:"",
  profile_pic:""
}

export const ProfileForm=()=>{
  const [formData,setFormData] = useState(initState);
    const handleChange=(e)=>{
      const {name,value} = e.target;
      const val = name==="age" ? Number(value):value;
      setFormData({...formData,[name]:val})
    };
    const handleClick=()=>{
      setFormData(initState);
    };
    console.log(formData);
    const {name,phone,email,age,adress,country,profile_pic} = formData;
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
  <GridItem colSpan={{base:2,md:2}}>
    <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input 
        placeholder="Name"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}/>
    </FormControl>
  </GridItem>
  <GridItem colSpan={{base:2,md:1}}>
    <FormControl isRequired>
        <FormLabel>Phone</FormLabel>
        <Input 
        placeholder="Phone"
        type="number"
        name="phone"
        value={phone}
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
        value={email}
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
        value={age}
        onChange={handleChange}/>
    </FormControl>
  </GridItem>
  <GridItem colSpan={2}>
    <FormControl isRequired>
        <FormLabel>Adress</FormLabel>
        <Textarea
        placeholder="Adress"
        type="text"
        name="adress"
        value={adress}
        onChange={handleChange}
        resize="none"/>
    </FormControl>
  </GridItem>
  <GridItem colSpan={2}>
    <FormControl isRequired>
        <FormLabel>Country</FormLabel>
        <Select>
        placeholder="Country"
        type="text"
        name="country"
        value={country}
        onChange={handleChange}
        <option>India</option>
        <option>UAE</option>
        <option>USA</option>
        <option>China</option>
        <option>Canada</option>
        </Select>
    </FormControl>
  </GridItem>
  <GridItem colSpan={2}>
    <FormControl isRequired>
        <FormLabel>Profile Pic</FormLabel>
        <Input 
        placeholder="Profile-pic"
        type="file"
        name="profile_pic"
        value={profile_pic}
        onChange={handleChange}/>
    </FormControl>
  </GridItem>
  <GridItem>
    <FormControl>
        <Button 
        w="full" 
        variant="outline"
        onClick={handleClick}>Create Profile</Button>
    </FormControl>
  </GridItem>
</Grid>
            </VStack>
        </VStack>
    )
}