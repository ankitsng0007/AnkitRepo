import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from "@chakra-ui/react";
import React from "react";

export const BasicPortal=()=>{
    const {isOpen,onClose,onOpen}=useDisclosure();
    const cancelRef=React.useRef();
    return(
        <>
        <Button colorScheme="red" onClick={onOpen}>
            Clicking on This opens the Alert Dialog
        </Button>
        <AlertDialog 
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        This ia Title when alert dailog opens
                    </AlertDialogHeader>
                    <AlertDialogBody>
                        Alert Dailog Body comes Here.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="red" onClick={onClose}>
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
        </>
    )
}