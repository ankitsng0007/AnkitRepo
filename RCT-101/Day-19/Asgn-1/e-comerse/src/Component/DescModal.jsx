import { Button, Modal, ModalContent, useDisclosure } from "@chakra-ui/react"

export const DescModal=()=>{
    const [isOpen,onClose,onOpen] = useDisclosure();
    return(
        <>
        <Button>Open Modal</Button>
        <Modal>
            <ModalContent></ModalContent>
        </Modal>
        </>
    )
}