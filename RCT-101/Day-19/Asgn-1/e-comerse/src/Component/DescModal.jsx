import { Button, Modal, ModalContent,ModalHeader,ModalBody, useDisclosure, ModalFooter } from "@chakra-ui/react"

export const DescModal=(isModalVisible,setIsModalVisible,data)=>{
 //    const {isOpen,onClose,onOpen} = useDisclosure();
 const onClose = ()=>{
    setIsModalVisible(false);
 }
    return(
        <>  
        {/*<Button>Open Modal</Button>*/}
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalContent>
                <ModalHeader>Title</ModalHeader>
                <ModalBody>My First Modal</ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}