import { redirect } from "@remix-run/node";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { firebaseFirestore } from "~/global/services/Firebase";
import { checkFieldsCloseRoom } from "../validations/checkFieldsCloseRoom";
import { checkUserLogged } from "../validations/checkUserLogged";
import type { IReturnFetchDataRoom } from "~/global/types";

export async function handleNewGame(request: Request, formData: FormData, roomId: string) {
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

  const { usersInsideInTheRoom, roomConfig } = docSnap.data() as IReturnFetchDataRoom;

  const clearCardsSelected = usersInsideInTheRoom.map(object => {
    return {
      id: object.id,
      timeEnteredRoom: object.timeEnteredRoom,
      email: object.email,
      card: {
        value: 0,
        selected: false,
      }
    }
  })

  await updateDoc(myDocRef, { 
    roomConfig: {
      roomClosed: roomConfig.roomClosed,
      viewCards: false,
    },
    usersInsideInTheRoom: clearCardsSelected,
  });
  return null
}