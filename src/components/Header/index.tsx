import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImage from "../../assets/logo-ignite.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";
import { useState } from "react";

export const Header = () => {
  const [openDialog, setOpenDialog] = useState(false)

  const formIsSubmitted = (state: boolean) => {
    setOpenDialog(state)
  }

    return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} />

        <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal changeIfSubmit={formIsSubmitted} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
};
