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

export function RoomComponent({ userRole, roomData, userCredentials }: IRoomComponent) {
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
    </Container>
  );
}
