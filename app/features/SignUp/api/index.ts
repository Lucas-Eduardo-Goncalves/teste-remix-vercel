import { redirect } from "@remix-run/node";

import { checkUserLogged } from "./validations";
import { handleSignUpUser } from "./functions/handleSignUpUser";

export async function actionController(request: Request) {
  const formData = await request.formData();
  const { _action } = Object.fromEntries(formData);

  switch(_action) {
    case "callSignUpFunction":
      return await handleSignUpUser(request, formData);
      
    default: 
      return null;
  }
}

export async function loaderController(request: Request) {
  const userLogged = await checkUserLogged(request);
  if(userLogged) return redirect("/createroom");

  return null;
}