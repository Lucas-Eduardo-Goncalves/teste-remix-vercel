import { useEffect } from "react";
import { X } from "phosphor-react";
import toast from "react-hot-toast";

import { Button } from "~/components/Button";
import type { ICreateRoomComponent } from "../types";

import { 
  Container, 
  SignOutButtonForm,
  SignOutButton,
  Content, 
  Section,
  FormAreaDivider, 
  FormDivider,
  MenuButtonArea, 
} from "./styles";
import { MenuButtonUser } from "~/components/MenuButtonUser";

export function CreateRoomComponent({ 
  actionData, 
  userCredentials, 
  isLoadingButton, 
}: ICreateRoomComponent) {
  useEffect(() => {
    if(actionData) toast.error(actionData.message)
  }, [actionData])
  
  return (
    <Container>
      <SignOutButtonForm method="post" title="Logout">
        <SignOutButton 
          name="_action"
          value="callFunctionHandleSignOut"
          whileHover={{
            rotate: 180,
            transition: { duration: 0.4 },
          }}
        >
          <X fontSize="1.5rem" />
        </SignOutButton>
      </SignOutButtonForm>

      <Content 
        animate={{ x: [100, 0], opacity: [0, 1] }} 
        transition={{ type: "spring", duration: 0.5 }}
      >
        <Section method="post">
          <label htmlFor="enterRoomInput">Entre em uma sala</label>
          <input 
            type="text" 
            name="roomId" 
            id="enterRoomInput" 
            placeholder="Código da sala"
          />
          
          <Button 
            text="Entrar" 
            type="submit" 
            isLoading={isLoadingButton}
            formName="callFunctionHandleEnterRoom"
          />
        </Section>

        <FormAreaDivider>
          <FormDivider />
          ou
          <FormDivider />
        </FormAreaDivider>

        <Section method="post">
          <label htmlFor="createRoomInput">Crie sua própria sala</label>
          <input 
            type="text" 
            name="roomName" 
            id="createRoomInput" 
            placeholder="Nome da sala"
          />

          <Button 
            text="Criar Sala" 
            type="submit" 
            isLoading={isLoadingButton}
            formName="callFunctionHandleCreateRoom"
          />
        </Section>
      </Content>
      
      <MenuButtonArea>
        <MenuButtonUser 
          userId={userCredentials.userId} 
          userEmail={userCredentials.userEmail}
        />
      </MenuButtonArea>
    </Container>
  );
}