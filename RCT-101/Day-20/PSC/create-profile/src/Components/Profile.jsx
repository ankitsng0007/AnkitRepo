import { Box, Image, VStack } from "@chakra-ui/react";
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
            <Box>
                <Image 
                boxSize=""
                src={users.profile_pic}
                borderRadius="full"/>
            </Box>
        </VStack>
    )
}