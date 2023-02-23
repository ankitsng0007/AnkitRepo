import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Container, Img, SimpleGrid,Skeleton,Text } from "@chakra-ui/react"
import { useState,useEffect } from "react";
import axios from "axios";
import { DescModal } from "./DescModal";

export const ProductPage=()=>{
    const [data,setData]=useState("");
    const [isModalVisible,setIsModalVisible] = useState(false);
    const [isLoading,setIsLoading] =useState(false);

    useEffect(()=>{
        axios.get(`http://localhost:8080/items/${(window.location.href).split("items/")[1]}`)
        .then(res=>{
            setData(res.data)
            setTimeout(()=>{
                setIsLoading(true)
            },2000)
        })
    },[])
    console.log(data);
    return(
        <>
        <Breadcrumb spacing="8px">
        <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
        <BreadcrumbLink href="#">About</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
        <BreadcrumbLink href="#">Contact</BreadcrumbLink>
        </BreadcrumbItem>
        </Breadcrumb>
        <h1>Product</h1>
        <SimpleGrid columns={[1,2,2,3]}>
            <Box>
                <Img src={data.imageURL} />
            </Box>
            <Box>
                <Skeleton isLoaded={isLoading}>
                <Container>
                    {data.description}
                </Container>
                </Skeleton>
                <Text>{data.name}</Text>
                <Text>Price : Rs.{data.price}</Text>
                <Button variant={["base","sm","md"]} onClick={()=>{setIsModalVisible(true)}}>View More</Button>
                {
                    isModalVisible && 
                    <DescModal 
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}
                    data={data.description} />
                }
            </Box>
        </SimpleGrid>
            </>
    )
}