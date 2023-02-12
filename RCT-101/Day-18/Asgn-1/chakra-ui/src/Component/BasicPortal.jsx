import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from "@chakra-ui/react";
import React from "react";

export const BasicPortal=()=>{
    const {isOpen,onClose,onOpen}=useDisclosure();
    return(
        <>
        <Button colorScheme="red" onClick={onOpen}>
            Clicking on This opens the Alert Dialog
        </Button>
        <AlertDialog>
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        This ia Title when alert dailog opens
                    </AlertDialogHeader>
                    <AlertDialogBody>
                        Alert Dailog Body comes Here.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button>
                            Cancel
                        </Button>
                        <Button>
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
        </>
    )
}