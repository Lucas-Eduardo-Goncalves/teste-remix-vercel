import { getSessionAuth } from "~/global/services/cookies/AuthCookie";

export async function checkUserLogged(request: Request): Promise<boolean> {
  const session = await getSessionAuth(request.headers.get("Cookie"));

  if (session.has("access_token")) return true;
  return false;
};
