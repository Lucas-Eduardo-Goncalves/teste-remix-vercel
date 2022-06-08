import { useEffect, useState } from "react";
import { PokerCard } from "../PokerCard";
import { Container } from "./styles";

type IDeckAreaComponent = {
  cardsDisabled: boolean;
}

export function DeckArea({ cardsDisabled }: IDeckAreaComponent) {
  const fibonacciSequence = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
  const [valueSelected, setValueSelected] = useState(0);

  useEffect(() => {
    if(cardsDisabled === true) setValueSelected(0);
  }, [cardsDisabled]);
  return (
    <Container>
      {fibonacciSequence.map(sequenceItem => (
        <PokerCard
          isDisabled={cardsDisabled}
          key={sequenceItem}
          cardValue={sequenceItem}
          valueSelected={valueSelected} 
          setValueSelected={setValueSelected}
        />
      ))}
    </Container>
  )
}