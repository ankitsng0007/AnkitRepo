import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import { Profile } from "../Components/Profile";
import { ProfileForm } from "../Components/ProfileForm";

export const Home =()=>{
    return(
        <Container maxWidth={{base:"full", md:"container.xl"}} p={0}>
            <Flex h="200vh" w="full" py={10}>
            <ProfileForm />
             <Profile />
            </Flex>
        </Container>
    )
}
