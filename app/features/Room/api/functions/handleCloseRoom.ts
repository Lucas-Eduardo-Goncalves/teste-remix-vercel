import { redirect } from "@remix-run/node";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { firebaseFirestore } from "~/global/services/Firebase";

import { checkFieldsCloseRoom } from "../validations/checkFieldsCloseRoom";
import { checkUserLogged } from "../validations/checkUserLogged";

import type { IReturnFetchDataRoom } from "~/global/types";

export async function handleCloseRoom(formData: FormData, request: Request, roomId: string) {
  // Check user logged.
  const returnCheckUserLogged = await checkUserLogged(request);
  if(!returnCheckUserLogged) return redirect("/");

  // CheckField
  const returnCheckField = await checkFieldsCloseRoom(formData);
  if(!returnCheckField || returnCheckField !== "admin") {
    return { message: "Você não é um adminstrador" }
  }
  
  // Check room exists 
  const myDocRef = doc(firebaseFirestore, "rooms", roomId);
  const docSnap = await getDoc(myDocRef);
  if (!docSnap.exists()) return redirect("/createroom");

  // Room Data
  const { roomConfig } = docSnap.data() as IReturnFetchDataRoom;
    
  const newRoomConfig = {
    roomClosed: true,
    viewCards: roomConfig.viewCards,
  }

  await updateDoc(myDocRef, { roomConfig: newRoomConfig });
  return null;
}
