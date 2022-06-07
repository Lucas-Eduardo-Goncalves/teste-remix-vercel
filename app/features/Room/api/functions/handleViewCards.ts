import { redirect } from "@remix-run/node";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { firebaseFirestore } from "~/global/services/Firebase";
import { checkFieldsCloseRoom } from "../validations/checkFieldsCloseRoom";
import { checkUserLogged } from "../validations/checkUserLogged";
import type { IReturnFetchDataRoom } from "~/global/types";
import { functionCalculatesAverage } from "../utils/functionCalculatesAverage";

export async function handleViewCards(request: Request, formData: FormData, roomId: string) {
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
  const { roomConfig, usersInsideInTheRoom } = docSnap.data() as IReturnFetchDataRoom;

  const newRoomConfig = {
    roomClosed: roomConfig.roomClosed,
    viewCards: true,
  }

  // Calculates Average
  const calculageResponse = functionCalculatesAverage({ usersInsideInTheRoom })

  await updateDoc(myDocRef, { roomConfig: newRoomConfig, roomResponse: calculageResponse});
  return null;
}