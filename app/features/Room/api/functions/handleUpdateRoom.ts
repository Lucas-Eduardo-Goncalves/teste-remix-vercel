import { redirect } from "@remix-run/node";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { firebaseFirestore } from "~/global/services/Firebase";
import { getUserCredentials } from "~/global/utils/getUserCredentials";
import { checkUserIsAdminRoom } from "../validations/checkUserIsAdminRoom";
import { checkUserLogged } from "../validations/checkUserLogged";
import type { IReturnFetchDataRoom } from "~/global/types";
import { checkFieldHandlUpdateRoom } from "../validations/checkFieldsUpdateRoom";

export async function handleUpdateRoom(request: Request, formData: FormData, roomId: string) {
  // Check user logged.
  const returnCheckUserLogged = await checkUserLogged(request);
  if(!returnCheckUserLogged) return redirect("/");

  const returnCheckFields = await checkFieldHandlUpdateRoom(formData);
  if(!returnCheckFields) return null;

  // Check room exists
  const docRef = doc(firebaseFirestore, "rooms", roomId);
  const docData = await getDoc(docRef);
  if(!docData.exists()) return redirect("/createroom");

  // Room Data
  const { roomAdmin, roomInfo, roomConfig } = docData.data() as IReturnFetchDataRoom;
  const { userId } = await getUserCredentials(request);

  // CheckUserIsAdmin
  const returnCheckField = checkUserIsAdminRoom({ roomAdmin, userId });
  if(returnCheckField !== "admin") return null

  await updateDoc(docRef, { 
    roomInfo: {
      createdAt: roomInfo.createdAt,
      roomName: returnCheckFields.roomName,
    },
    roomConfig: {
      roomClosed: roomConfig.roomClosed,
      viewCards: roomConfig.viewCards,
      sequencyName: returnCheckFields.sequencyName,
    }
  });

  return null
}