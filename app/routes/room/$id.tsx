import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { useLoaderData, useNavigate, useParams } from "@remix-run/react";

import { actionController, loaderController } from "~/features/Room/api";
import { RoomComponent } from "~/features/Room/RoomComponent";
import { firebaseFirestore } from "~/global/services/Firebase";

import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import type { IReturnFetchDataRoom } from "~/global/types";

export const action: ActionFunction = async ({ request, params }) => {
  return await actionController(request, params.id);
}

export const loader: LoaderFunction = async ({ request, params }) => {
  return await loaderController(request, params.id);
}

export default function() {
  const { roomData, userIsAdmin, userCredentials } = useLoaderData();
  const [roomDataInitial, setRoomDataInitial] = useState<IReturnFetchDataRoom>(roomData);

  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    onSnapshot(doc(firebaseFirestore, "rooms", String(id)), (doc) => {
      setRoomDataInitial(doc.data() as IReturnFetchDataRoom);
    });
  }, [id])

  useEffect(() => {
    if(roomDataInitial.roomConfig.roomClosed) {
      toast.error("A sala foi fechada");
      navigate("/createroom");
    }
  }, [roomDataInitial.roomConfig.roomClosed, navigate])

  return (
    <RoomComponent 
      roomData={roomDataInitial}
      userRole={userIsAdmin}
      userCredentials={userCredentials}
    />
  );
}