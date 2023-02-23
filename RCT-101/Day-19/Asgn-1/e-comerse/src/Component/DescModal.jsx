import { Button, Modal, ModalContent,ModalHeader,ModalBody, useDisclosure, ModalFooter, Container } from "@chakra-ui/react"

export const DescModal=({isModalVisible,setIsModalVisible,data})=>{
 //    const {isOpen,onClose,onOpen} = useDisclosure();
 const onClose = ()=>{
    setIsModalVisible(false);
 }
    return(
        <>  
        <Modal isOpen={isModalVisible} onClose={onClose}>
            <ModalContent>
                <ModalHeader>Title</ModalHeader>
                <ModalBody>
                    <Container>{data}</Container>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}