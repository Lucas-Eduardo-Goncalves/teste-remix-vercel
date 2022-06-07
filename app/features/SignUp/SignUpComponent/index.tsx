import { useEffect } from "react";
import { Form, Link } from "@remix-run/react";
import toast from "react-hot-toast";

import logo from "~/assets/logo.svg";
import { Button } from "~/components/Button";

import { Container, Apresentation, Content } from "./styles";
import type { ISignUpUserComponent } from "../types";

export function SignUpComponent({ actionData, isLoadingButton }: ISignUpUserComponent) {
  useEffect(() => {
    if(actionData) toast.error(actionData.message)
  }, [actionData])
  
  return (
    <Container>
      <Content 
        animate={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <Form method="post">
          <h3>Crie sua conta:</h3>

          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Senha" />

          <Button 
            type="submit" 
            text="Criar" 
            formName="callSignUpFunction"
            isLoading={isLoadingButton} 
          />
        </Form>

        <Link to="/">Possui uma conta? Faça login!</Link>
      </Content>

      <Apresentation>
        <img src={logo} alt="Logo" />
        <h1>Poker Scrum</h1>
      </Apresentation>
    </Container>
  );
}
