import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import { Profile } from "../Components/Profile";
import { ProfileForm } from "../Components/ProfileForm";

export const Home =()=>{
    return(
        <Container 
        maxWidth={{base:"full", md:"container.xl"}} 
        p={{base:2, md:0}}>
            <Flex h="250vh" w="full" py={10} direction={{base:"column",md:"row"}}>
            <ProfileForm />
             <Profile />
            </Flex>
        </Container>
    )
}
