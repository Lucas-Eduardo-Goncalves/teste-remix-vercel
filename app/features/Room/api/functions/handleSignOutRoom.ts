import { redirect } from "@remix-run/node";
import { signOut } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import { destroySessionAuth, getSessionAuth } from "~/global/services/cookies";
import { firebaseAuth, firebaseFirestore } from "~/global/services/Firebase";
import { checkUserLogged } from "../validations/checkUserLogged";
import type { IReturnFetchDataRoom } from "~/global/types";
import { getUserCredentials } from "~/global/utils/getUserCredentials";

export async function handleSignOutRoom(request: Request, roomId: string) {
  // Check user logged.
  const returnCheckUserLogged = await checkUserLogged(request);
  if(!returnCheckUserLogged) return redirect("/");

  // Check room exists
  const docRef = doc(firebaseFirestore, "rooms", roomId);
  const docData = await getDoc(docRef);
  if(!docData.exists()) return redirect("/createroom");

  // Room Data
  const roomData = docData.data() as IReturnFetchDataRoom;
  const { userId } = await getUserCredentials(request);

  const usersInsideInTheRoom = roomData.usersInsideInTheRoom.filter(
    user => user.id !== userId);

  await updateDoc(docRef, {
    usersInsideInTheRoom: usersInsideInTheRoom
  })

  await signOut(firebaseAuth);

  const session = await getSessionAuth(request.headers.get("Cookie"));
  return redirect("/", {
    headers: {
      "Set-Cookie": await destroySessionAuth(session),
    },
  });
}