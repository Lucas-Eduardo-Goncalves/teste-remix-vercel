import { Container } from "./styles";

type IMenuButtonUserComponent = {
  userId: string;
  userEmail: string;
}

export function MenuButtonUser({ userId, userEmail }: IMenuButtonUserComponent) {
  return (
    <Container title={"ID: " + userId}>
      {userEmail}
    </Container>
  );
}
