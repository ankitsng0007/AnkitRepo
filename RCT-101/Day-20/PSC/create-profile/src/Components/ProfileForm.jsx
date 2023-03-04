import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const ProfileForm=()=>{
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
            </VStack>
        </VStack>
    )
}