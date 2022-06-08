import { Form } from "@remix-run/react";
import type { IPokerTableComponent } from "../../types";
import { PokerTableCard } from "../PokerTableCard";
import { 
  Container, 
  RowOne,
  RowTwo,
  RowThree,
} from "./styles";

export function PokerTable({ usersInsideInTheRoom, userRole, roomConfig }: IPokerTableComponent) {

  const usersInsideInTheRoomOrdenation = usersInsideInTheRoom.sort((a,b) => {
    return a.timeEnteredRoom < b.timeEnteredRoom ? -1 : a.timeEnteredRoom > b.timeEnteredRoom ? 1 : 0
  })

  return (
    <Container>
      <RowOne>
        <div />
        {usersInsideInTheRoomOrdenation[2] && (
          <PokerTableCard
            cardValue={usersInsideInTheRoomOrdenation[2].card.value}
            cardSelected={usersInsideInTheRoomOrdenation[2].card.selected}
            cardView={roomConfig.viewCards}
          />
        )}
        {usersInsideInTheRoomOrdenation[0] && (
          <PokerTableCard
            cardValue={usersInsideInTheRoomOrdenation[0].card.value}
            cardSelected={usersInsideInTheRoomOrdenation[0].card.selected}
            cardView={roomConfig.viewCards}
          />
        )}
        {usersInsideInTheRoomOrdenation[4] && (
          <PokerTableCard
            cardValue={usersInsideInTheRoomOrdenation[4].card.value}
            cardSelected={usersInsideInTheRoomOrdenation[4].card.selected}
            cardView={roomConfig.viewCards}
          />
        )}
        <div />
      </RowOne>

      <RowTwo>
        {usersInsideInTheRoomOrdenation[6] ? (
          <PokerTableCard
            cardValue={usersInsideInTheRoomOrdenation[6].card.value}
            cardSelected={usersInsideInTheRoomOrdenation[6].card.selected}
            cardView={roomConfig.viewCards}
          />
        ): <div></div>}

        <span>
          {userRole === "admin" && (
            <Form method="post">
              <input type="hidden" name="userRole" value={userRole} />

              <button 
                disabled={roomConfig.viewCards}
                name="_action" 
                value="callFunctionHandleViewCards"
              >
                Revelar cartas
              </button> 
            </Form>
          )}
        </span>

        {usersInsideInTheRoomOrdenation[7] ? (
          <PokerTableCard
            cardValue={usersInsideInTheRoomOrdenation[7].card.value}
            cardSelected={usersInsideInTheRoomOrdenation[7].card.selected}
            cardView={roomConfig.viewCards}
          />
        ): <div></div>}
      </RowTwo>

      <RowThree>
        <div />
        {usersInsideInTheRoomOrdenation[3] && (
          <PokerTableCard
            cardValue={usersInsideInTheRoomOrdenation[3].card.value}
            cardSelected={usersInsideInTheRoomOrdenation[3].card.selected}
            cardView={roomConfig.viewCards}
          />
        )}
        {usersInsideInTheRoomOrdenation[1] && (
          <PokerTableCard
            cardValue={usersInsideInTheRoomOrdenation[1].card.value}
            cardSelected={usersInsideInTheRoomOrdenation[1].card.selected}
            cardView={roomConfig.viewCards}
          />
        )}
        {usersInsideInTheRoomOrdenation[5] && (
          <PokerTableCard
            cardValue={usersInsideInTheRoomOrdenation[5].card.value}
            cardSelected={usersInsideInTheRoomOrdenation[5].card.selected}
            cardView={roomConfig.viewCards}
          />
        )}
        <div />
      </RowThree>
    </Container>
  );
}