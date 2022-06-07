import { redirect } from "@remix-run/node";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { checkLoginFields, checkUserLogged } from "../validations";
import { firebaseAuth } from "~/global/services/Firebase";
import { commitSessionAuth, getSessionAuth } from "~/global/services/cookies";
import { validationErrosFirebase } from "~/global/validation/validationErrosFirebase";

export async function handleSignUpUser(request: Request, formData: FormData) {
  // Check user logged
  const responseCheckLoggedUser = await checkUserLogged(request);
  if(responseCheckLoggedUser) return redirect("/createroom");

  // Check fields
  const { email, password } = await checkLoginFields(formData);
  if(!email || !password) return { message: "Os campos não podem estar em branco."}
  
  // Create user
  const returnCreateUser = createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then(async({ user }) => {
      const session = await getSessionAuth(request.headers.get("Cookie"));
      session.set("access_token", await user.getIdToken())
      session.set("user_credentials", {
        userEmail: user.email,
        userId: user.uid,
      })

      return redirect("/createroom", {
        headers: { "Set-Cookie": await commitSessionAuth(session) }
      });
    })
    .catch(error => validationErrosFirebase(error.code))

  return returnCreateUser;
}