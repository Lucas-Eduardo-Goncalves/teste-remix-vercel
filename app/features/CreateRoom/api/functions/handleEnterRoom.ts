import { redirect } from "@remix-run/node";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import type { IReturnFetchDataRoom } from "~/global/types";
import { checkFieldHandleEnterRoom, checkUserLogged } from "../validations";
import { firebaseFirestore } from "~/global/services/Firebase";
import { getUserCredentials } from "~/global/utils/getUserCredentials";

export async function handleEnterRoom(request: Request, formData: FormData) {
  // Check user logged.
  const returnCheckUserLogged = await checkUserLogged(request);
  if(!returnCheckUserLogged) return redirect("/");

  // Check enter room field.
  const returnCheckField = await checkFieldHandleEnterRoom(formData);
  if(!returnCheckField) return { message: "O campo não pode estar em branco." }

  // Check room exists.
  const docRef = doc(firebaseFirestore, "rooms", returnCheckField);
  const docData = await getDoc(docRef);
  if(!docData.exists()) return { message: "Não existe uma sala com esse código" };

  // Check room closed.
  const { roomConfig, usersInsideInTheRoom } = docData.data() as IReturnFetchDataRoom;
  if(roomConfig.roomClosed) return { message: "Essa sala já foi fechada" };

  // Check if the user is already in the room.
  const { userEmail, userId } = await getUserCredentials(request);
  const userAlreadyPost = usersInsideInTheRoom.find(user => user.id === userId);

  // If you are
  if(userAlreadyPost) return redirect(`/room/${returnCheckField}`);

  // If not
  await updateDoc(docRef, {
    usersInsideInTheRoom: [...usersInsideInTheRoom, {
      card: { value: 0, selected: false },
      email: userEmail,
      id: userId,
    }]
  });

  return redirect(`/room/${returnCheckField}`);
}