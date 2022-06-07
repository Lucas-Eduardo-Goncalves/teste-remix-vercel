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
  return (
    <Container>
      <RowOne>
        <div />
        {usersInsideInTheRoom[2] && (
          <PokerTableCard
            cardValue={usersInsideInTheRoom[2].card.value}
            cardSelected={usersInsideInTheRoom[2].card.selected}
            cardView={roomConfig.viewCards}
          />
        )}
        {usersInsideInTheRoom[0] && (
          <PokerTableCard
            cardValue={usersInsideInTheRoom[0].card.value}
            cardSelected={usersInsideInTheRoom[0].card.selected}
            cardView={roomConfig.viewCards}
          />
        )}
        {usersInsideInTheRoom[4] && (
          <PokerTableCard
            cardValue={usersInsideInTheRoom[4].card.value}
            cardSelected={usersInsideInTheRoom[4].card.selected}
            cardView={roomConfig.viewCards}
          />
        )}
        <div />
      </RowOne>

      <RowTwo>
        {usersInsideInTheRoom[6] ? (
          <PokerTableCard
            cardValue={usersInsideInTheRoom[6].card.value}
            cardSelected={usersInsideInTheRoom[6].card.selected}
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

        {usersInsideInTheRoom[7] ? (
          <PokerTableCard
            cardValue={usersInsideInTheRoom[7].card.value}
            cardSelected={usersInsideInTheRoom[7].card.selected}
            cardView={roomConfig.viewCards}
          />
        ): <div></div>}
      </RowTwo>

      <RowThree>
        <div />
        {usersInsideInTheRoom[3] && (
          <PokerTableCard
            cardValue={usersInsideInTheRoom[3].card.value}
            cardSelected={usersInsideInTheRoom[3].card.selected}
            cardView={roomConfig.viewCards}
          />
        )}
        {usersInsideInTheRoom[1] && (
          <PokerTableCard
            cardValue={usersInsideInTheRoom[1].card.value}
            cardSelected={usersInsideInTheRoom[1].card.selected}
            cardView={roomConfig.viewCards}
          />
        )}
        {usersInsideInTheRoom[5] && (
          <PokerTableCard
            cardValue={usersInsideInTheRoom[5].card.value}
            cardSelected={usersInsideInTheRoom[5].card.selected}
            cardView={roomConfig.viewCards}
          />
        )}
        <div />
      </RowThree>
    </Container>
  );
}