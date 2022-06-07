import { redirect } from "@remix-run/node";
import { handleSignInUser } from "./functions/handleSignInUser";
import { checkUserLogged } from "./validations";

export async function actionController(request: Request) {
  const formData = await request.formData();
  const { _action } = Object.fromEntries(formData);

  switch(_action) {
    case "callSignInFunction":
      return await handleSignInUser(request, formData);

    default:
      return null;
  }
};

export async function loaderController(request: Request) {
  const userLogged = await checkUserLogged(request);
  if(userLogged) return redirect("/createroom");

  return null;
}
