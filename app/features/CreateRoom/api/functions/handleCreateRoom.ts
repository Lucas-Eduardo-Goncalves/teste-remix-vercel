import { redirect } from "@remix-run/node";

import type { IReturnFetchDataRoom } from "~/global/types";
import { checkUserLogged } from "../validations";
import { getUserCredentials } from "~/global/utils/getUserCredentials";
import { checkFieldHandleCreateRoom } from "../validations/checkFieldHandleCreateRoom";
import { addDoc, collection } from "firebase/firestore";
import { firebaseFirestore } from "~/global/services/Firebase";

export async function handleCreateRoom(request: Request, formData: FormData) {
  // Check user logged.
  const returnCheckUserLogged = await checkUserLogged(request);
  if(!returnCheckUserLogged) return redirect("/");

  // Check enter room field.
  const returnCheckField = await checkFieldHandleCreateRoom(formData);
  if(!returnCheckField) return { message: "É necessário que a sala tenha um nome" };

  // Create object with room data  
  const { userEmail, userId } = await getUserCredentials(request);
  const roomData: IReturnFetchDataRoom = {
    roomAdmin: {
      id: userId,
      email: userEmail,
    },
    roomConfig: {
      viewCards: false,
      roomClosed: false,
    },
    roomInfo: {
      createdAt: new Date(),
      roomName: returnCheckField,
    },
    usersInsideInTheRoom: [
      {
        id: userId,
        email: userEmail,
        timeEnteredRoom: new Date(),
        card: { 
          value: 0, 
          selected: false 
        },
      }
    ],
    roomResponse: {
      label: [],
      series: [],
      media: 0, 
    }
  }

  // Create and redirect to room
  const docRef = await addDoc(collection(firebaseFirestore, "rooms"), roomData);
  return redirect(`/room/${docRef.id}`);
}