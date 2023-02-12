import { AlertDialog, Button, useDisclosure } from "@chakra-ui/react";
import React from "react";

export const BasicPortal=()=>{
    const {isOpen,onClose,onOpen}=useDisclosure();
    return(
        <>
        <Button>
            Clicking on This opens the Alert Dialog
        </Button>
        </>
    )
}