import { useEffect } from "react";
import { Form, Link } from "@remix-run/react";
import toast from "react-hot-toast";

import logo from "~/assets/logo.svg";
import { Button } from "~/components/Button";
import type { ISignInComponent } from "../types";

import { Container, Apresentation, Content } from "./styles";

export function SignInComponent({ actionData, isLoadingButton }: ISignInComponent) {
  useEffect(() => {
    if(actionData) toast.error(actionData.message);
  }, [actionData])

  return (
    <Container>
      <Apresentation>
        <img src={logo} alt="Logo" />
        <h1>Poker Scrum</h1>
      </Apresentation>

      <Content 
        animate={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <Form method="post">
          <h3>Faça login em nossa plataforma:</h3>

          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Senha" />
          
          <Button 
            type="submit" 
            text="Entrar" 
            isLoading={isLoadingButton}
            formName="callSignInFunction" 
          />
        </Form>

        <Link to="/signup">Não possui uma conta? Crie agora!</Link>
      </Content>
    </Container>
  );
}
