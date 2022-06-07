import { motion } from "framer-motion";
import { Card, CardView } from "./styles";

type IPokerTableCardComponent = {
  cardValue: number;
  cardSelected: boolean;
  cardView: boolean;
}

export function PokerTableCard({ cardView, cardValue, cardSelected }: IPokerTableCardComponent) {
  return (
    <motion.div
      animate={{ y: [-10, 0], opacity: [0, 1] }} 
      transition={{ type: "spring", duration: 0.3 }}
    >
      {cardView && (
        <CardView>
          {cardValue}
        </CardView>
      )}

      {!cardView && (
        <Card isSelected={cardSelected} />
      )}
    </motion.div>
  );
}
