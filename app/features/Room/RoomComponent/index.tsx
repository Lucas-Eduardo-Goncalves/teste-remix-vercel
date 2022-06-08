import { X, GearSix } from "phosphor-react";
import { ClientPolarChart } from "~/components/PolarChart/index.client";
import { MenuButtonUser } from "~/components/MenuButtonUser";
import { DeckArea } from "../components/DeckArea";
import { PokerTable } from "../components/PokerTable";
import type { IRoomComponent } from "../types";

import { 
  CloseGameButton,
  CloseGameForm, 
  ConfigGameButton, 
  Container, 
  Content, 
  Header, 
  ResetGameButton, 
  ResetGameForm,
  SignOutButton, 
  SignOutButtonForm,
} from "./styles";
import { ClientOnly } from "remix-utils";
import { SimpleModal } from "~/components/SimpleModal";
import { useState } from "react";
import { ModalContent } from "../components/ModalContent";

export function RoomComponent({ userRole, roomData, userCredentials }: IRoomComponent) {
  const [ isOpen, setIsOpen ] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <Container>
      <Header>
        <SignOutButtonForm method="post">
          <SignOutButton 
            title="SignOut"
            name="_action"
            value="callFunctionSignOut"
            whileHover={{
              rotate: 180,
              transition: { duration: 0.4 },
            }}
          >
            <X fontSize="1.5rem" />
          </SignOutButton>
        </SignOutButtonForm>
        
        {userRole === "admin" && (
          <ConfigGameButton
            whileHover={{
              rotate: 180,
              transition: { duration: 0.4 },
            }}
            onClick={onOpen}
          >
            <GearSix fontSize="1.5rem" />
          </ConfigGameButton>
        )}
        
        {userRole === "admin" && (
          <CloseGameForm method="post">
            <input type="hidden" name="userRole" value={userRole} />
            
            <CloseGameButton
              name="_action"
              value="callFunctionCloseRoom"
            >
              Fechar sala
            </CloseGameButton>
          </CloseGameForm>
        )}

        {userRole === "admin" && (
          <ResetGameForm method="post">
            <input type="hidden" name="userRole" value={userRole} />
            
            <ResetGameButton
              name="_action"
              value="callFunctionNewGame"
            >
              Novo jogo
            </ResetGameButton>
          </ResetGameForm>
        )}

        <MenuButtonUser 
          userEmail={userCredentials.userEmail} 
          userId={userCredentials.userId} 
        />
      </Header>

      <Content>
        <PokerTable 
          roomConfig={roomData.roomConfig}
          userRole={userRole}
          usersInsideInTheRoom={roomData.usersInsideInTheRoom} 
        />

        <ClientOnly>
          {() => <ClientPolarChart isVisibled={roomData.roomConfig.viewCards } roomResponse={roomData.roomResponse} />}
        </ClientOnly>
      </Content>

      <DeckArea cardsDisabled={roomData.roomConfig.viewCards}/>
      
      <SimpleModal 
        isOpen={isOpen} 
        onClose={onClose}
      >
        <ModalContent 
          defaultValues={{
            adminEmail: roomData.roomAdmin.email, 
            roomName: roomData.roomInfo.roomName, 
            votingSystem: "Fibonacci" 
          }} 
        />
      </SimpleModal>
    </Container>
  );
}
