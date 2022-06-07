import { redirect } from "@remix-run/node";
import { destroySessionAuth, getSessionAuth } from "~/global/services/cookies";
import { checkUserLogged } from "../validations";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "~/global/services/Firebase";

export async function handleSignOut(request: Request) {
  // Check user logged.
  const returnCheckUserLogged = await checkUserLogged(request);
  if(!returnCheckUserLogged) return redirect("/");

  await signOut(firebaseAuth);

  const session = await getSessionAuth(request.headers.get("Cookie"));
  return redirect("/", {
    headers: {
      "Set-Cookie": await destroySessionAuth(session),
    },
  });
}