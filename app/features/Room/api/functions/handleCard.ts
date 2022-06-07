import { redirect } from "@remix-run/node";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import { getUserCredentials } from "~/global/utils/getUserCredentials";
import { firebaseFirestore } from "~/global/services/Firebase";
import { checkFieldHandleCard } from "../validations/checkFieldHandleCard";
import { checkUserLogged } from "../validations/checkUserLogged";

import type { IReturnFetchDataRoom } from "~/global/types";

export async function handleCard(request: Request, formData: FormData, roomId: string) {
  // Check user logged.
  const returnCheckUserLogged = await checkUserLogged(request);
  if(!returnCheckUserLogged) return redirect("/");

  // Check card value.
  const returnCheckField = await checkFieldHandleCard(formData);
  if(!returnCheckField) return { message: "Nem uma carta selecionada." }

  // Check room exists.
  const myDocRef = doc(firebaseFirestore, "rooms", roomId);
  const docSnap = await getDoc(myDocRef);
  if (!docSnap.exists()) return redirect("/createroom");
  
  // Room Data.
  const { usersInsideInTheRoom } = docSnap.data() as IReturnFetchDataRoom;
  
  // Get user credentials.
  const { userId } = await getUserCredentials(request);
  const userAlreadyPost = usersInsideInTheRoom.find(object => object.id === userId);

  if(userAlreadyPost) {
    const arrayFilter = usersInsideInTheRoom.filter(item => item.id !== userId);
    const newArray = [ ...arrayFilter, {
      id: userAlreadyPost.id,
      email: userAlreadyPost.email,
      card: {
        selected: true,
        value: returnCheckField,
      },
      timeEnteredRoom: userAlreadyPost.timeEnteredRoom
    }]

    await updateDoc(myDocRef, { usersInsideInTheRoom: newArray });
    return null;
  }

  return null
};