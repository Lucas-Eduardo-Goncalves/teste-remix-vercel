import { redirect } from "@remix-run/node";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import type { IReturnFetchDataRoom } from "~/global/types";

import { firebaseFirestore } from "~/global/services/Firebase";
import { getUserCredentials } from "~/global/utils/getUserCredentials";
import { checkUserIsAdminRoom } from "./validations/checkUserIsAdminRoom";
import { checkUserLogged } from "./validations/checkUserLogged";

import { handleSignOutRoom } from "./functions/handleSignOutRoom";
import { handleCloseRoom } from "./functions/handleCloseRoom";
import { handleNewGame } from "./functions/handleNewGame";
import { handleCard } from "./functions/handleCard";
import { handleViewCards } from "./functions/handleViewCards";

export async function actionController(request: Request, roomId: string | undefined) {
  // Check id room exists
  if(!roomId) return redirect("/createroom");

  const formData = await request.formData();
  const { _action } = Object.fromEntries(formData);

  switch(_action) {
    case "callFunctionSignOut":
      return await handleSignOutRoom(request, roomId);
    
    case "callFunctionCloseRoom":
      return await handleCloseRoom(formData, request, roomId);

    case "callFunctionNewGame":
      return await handleNewGame(request, formData, roomId);
    
    case "callFunctionHandleCard":
      return await handleCard(request, formData, roomId);

    case "callFunctionHandleViewCards":
      return await handleViewCards(request, formData, roomId);

    case "callFunctionHandleUpdateRoom":
      console.log("eae")
      return null;

    default:
      return null;
  }
}

export async function loaderController(request: Request, roomId: string | undefined) {
  // Check user is logged
  const returnCheckUserLogged = await checkUserLogged(request);
  if(!returnCheckUserLogged) return redirect("/");
  
  // Check id room exists
  if(!roomId) return redirect("/createroom");
  
  // Check room exists
  const docRef = doc(firebaseFirestore, "rooms", roomId);
  const docData = await getDoc(docRef);
  if(!docData.exists()) return redirect("/createroom");

  // Room Data
  const roomData = docData.data() as IReturnFetchDataRoom;

  // Check room closed 
  if(roomData.roomConfig.roomClosed) return redirect("/createroom")

  // Check if the user is in the room
  const { userEmail, userId } = await getUserCredentials(request);
  const findUser = roomData.usersInsideInTheRoom.find(user => user.id === userId);

  // if the user is not in the room
  if(!findUser) {
    await updateDoc(docRef, {
      usersInsideInTheRoom: [...roomData.usersInsideInTheRoom, {
        id: userId,
        email: userEmail,
        timeEnteredRoom: new Date().toISOString(),
        card: { 
          value: 0, 
          selected: false 
        },
      }]
    });
  }

  // Making sure the user is the admin
  const userIsAdmin = checkUserIsAdminRoom({ userId, roomAdmin: roomData.roomAdmin});
  return { roomData, userIsAdmin, userCredentials: { userEmail, userId } };
}