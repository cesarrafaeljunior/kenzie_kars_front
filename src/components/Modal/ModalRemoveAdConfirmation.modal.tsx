import { iModalProps } from "@/interfaces/components.interfaces";
import {
  useDisclosure,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";

export const ModalRemoveAdConfirmation = ({ isOpen, onClose }: iModalProps) => {
  const cancelRef = useRef<any>();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent fontFamily={"Inte, sans-serif"}>
          <AlertDialogHeader fontSize="lg" fontWeight="semiBold">
            Ecluir anúncio
          </AlertDialogHeader>

          <AlertDialogBody
            display={"flex"}
            flexDirection={"column"}
            gap={"25px"}
          >
            <Text>
              <strong>Tem certeza que deseja remover este anúncio?</strong>
            </Text>
            Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
            conta e removerá seus dados de nossos servidores.
          </AlertDialogBody>

          <AlertDialogFooter marginTop={"40px"}>
            <Button ref={cancelRef} onClick={onClose} variant={"negative"}>
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={onClose}
              ml={3}
              variant={"alert"}
            >
              Sim, excluir anúncio
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
