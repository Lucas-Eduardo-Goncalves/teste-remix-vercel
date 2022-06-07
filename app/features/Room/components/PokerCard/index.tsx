import { Form } from "@remix-run/react";
import { Card } from "./styles";

type IPokerCard = {
  isDisabled: boolean;
  cardValue: number;
  valueSelected: number;
  setValueSelected: (event: number) => void;
}

export function PokerCard({ isDisabled,  cardValue, valueSelected, setValueSelected }: IPokerCard) {
  return (
    <Form method="post">
      <input type="hidden" name="cardValue" value={cardValue} />

      <Card 
        name="_action"
        disabled={isDisabled}
        value="callFunctionHandleCard"
        isSelected={valueSelected === cardValue}
        onClick={() => setValueSelected(cardValue)}
      >
        {cardValue}
      </Card>
    </Form>
  );
}
