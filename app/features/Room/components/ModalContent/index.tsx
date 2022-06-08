import { Button } from "~/components/Button";
import { Container } from "./styles";

type IModalContentComponent = {
  defaultValues: {
    adminEmail: string;
    roomName: string;
    votingSystem: string;
  }
}

export function ModalContent({ defaultValues }: IModalContentComponent) {
  return (
    <Container method="post">
      <h2>Configurações da sala</h2>

      <fieldset>
        <legend>Email do administrador</legend>
        <input 
          type="text" 
          name="adminEmail"
          defaultValue={defaultValues.adminEmail} 
        />
      </fieldset>

      <fieldset>
        <legend>Nome da sala</legend>
        <input 
          type="text" 
          name="roomName"
          defaultValue={defaultValues.roomName}
        />
      </fieldset>

      <fieldset>
        <legend>Sistema de voto</legend>
        
        <select name="sequencyName">
          <option value={defaultValues.votingSystem}>
            {defaultValues.votingSystem}
          </option>
        </select>
      </fieldset>

      <Button 
        text="Atualizar dados da sala" 
        type="submit"
        formName="callFunctionHandleUpdateRoom"
      />
    </Container>
  );
}
