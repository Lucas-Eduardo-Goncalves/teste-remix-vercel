import { getSessionAuth } from "~/global/services/cookies/AuthCookie";

type IGetUserCredentials = {
  userId: string;
  userEmail: string;
}

export async function getUserCredentials(request: Request): Promise<IGetUserCredentials> {
  const session = await getSessionAuth(request.headers.get("Cookie"));
  const userCredentials = session.get("user_credentials");

  return userCredentials;
}