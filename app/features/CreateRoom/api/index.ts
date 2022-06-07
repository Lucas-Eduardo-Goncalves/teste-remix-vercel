import { redirect } from "@remix-run/node";
import { checkUserLogged } from "./validations";
import { getUserCredentials } from "~/global/utils/getUserCredentials";
import { handleEnterRoom } from "./functions/handleEnterRoom";
import { handleCreateRoom } from "./functions/handleCreateRoom";
import { handleSignOut } from "./functions/handleSignOut";

export async function actionController(request: Request) {
  const formData = await request.formData();
  const { _action } = Object.fromEntries(formData);

  switch(_action) {
    case "callFunctionHandleEnterRoom":
      return await handleEnterRoom(request, formData);

    case "callFunctionHandleCreateRoom":
      return await handleCreateRoom(request, formData);

    case "callFunctionHandleSignOut":
      return await handleSignOut(request);

    default:
      return null;
  }
}

export async function loaderController(request: Request) {
  const userLogged = await checkUserLogged(request);
  if(!userLogged) return redirect("/");
  
  return await getUserCredentials(request);
}