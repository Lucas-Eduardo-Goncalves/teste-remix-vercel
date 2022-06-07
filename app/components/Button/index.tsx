import { PokerChip } from "phosphor-react";
import { Container, Motion } from "./styles";

interface IButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
  formName?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

export function Button({ 
  text, 
  type,
  onClick = () => {},
  formName = "",
  isDisabled = false,
  isLoading = false,
}: IButtonProps) {
  return (
    <Container 
      type={type} 
      onClick={onClick} 
      disabled={isLoading || isDisabled}
      name="_action" 
      value={formName}
    >
      {isLoading && (
        <Motion
          animate={{ rotate: 360 }}
          transition={{ type: "spring", repeat: Infinity, duration: 2 }}
        >
          <PokerChip size={32} /> 
        </Motion>
      )}
      
      {!isLoading && text}
    </Container>
  );
}