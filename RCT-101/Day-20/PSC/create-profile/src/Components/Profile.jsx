import { Box, Text, Center, Divider, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";

const users = {
    name:"Ankit",
    phone:"909099090",
    email:"ank@gmail.com",
    age:"23",
    adress:"ujn",
    country:"india",
    profile_pic:"https://avatars.githubusercontent.com/u/107460630?v=4"
  }
export const Profile=()=>{
    return(
        <VStack
        h="full"
        w="full"
        p={10}
        alignItems="flex-start"
        bg="gray.100">
            <Center width="full">
                <Image 
                boxSize=""
                src={users.profile_pic}
                borderRadius="full"/>
            </Center>
            <Divider />
            <SimpleGrid column={2} width="full" spacing={5}>
                <Box>
                    <Text>Name</Text>
                </Box>
                <Box>
                    <Text>{users.name}</Text>
                </Box>
                <Box>
                    <Text>Phone</Text>
                </Box>
                <Box>
                    <Text>{users.phone}</Text>
                </Box>
                <Box>
                    <Text>Email</Text>
                </Box>
                <Box>
                    <Text>{users.email}</Text>
                </Box>
                <Box>
                    <Text>Age</Text>
                </Box>
                <Box>
                    <Text>{users.age}</Text>
                </Box>
                <Box>
                    <Text>Adress</Text>
                </Box>
                <Box>
                    <Text>{users.adress}</Text>
                </Box>
                <Box>
                    <Text>Country</Text>
                </Box>
                <Box>
                    <Text>{users.country}</Text>
                </Box>
            </SimpleGrid>
        </VStack>
    )
}