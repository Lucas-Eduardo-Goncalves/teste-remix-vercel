import { getSessionAuth } from "../services/cookies/AuthCookie";

export async function checkUserLoggedIn(request: Request) {
  const session = await getSessionAuth(request.headers.get("Cookie"));
  if (session.has("access_token")) {
    return "logged";
  }

  return "loggedOut"
}