import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import { Profile } from "../Components/Profile";
import { ProfileForm } from "../Components/ProfileForm";

export const Home =()=>{
    return(
        <Container maxW="container.xl" p={0}>
            <Flex h="100vh" py={20}>
            <ProfileForm />
             <Profile />
            </Flex>
        </Container>
    )
}
