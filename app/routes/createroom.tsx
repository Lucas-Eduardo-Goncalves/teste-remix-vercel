import type { ActionFunction, LoaderFunction} from "@remix-run/node";
import { useActionData, useLoaderData, useTransition } from "@remix-run/react";

import { loaderController, actionController } from "~/features/CreateRoom/api";
import { CreateRoomComponent } from "~/features/CreateRoom/CreateRoomComponent";
import type { ILoaderProps, IActionProps } from "~/features/CreateRooms/types";

export const loader: LoaderFunction = async ({ request }) => {
  return await loaderController(request);
}

export const action: ActionFunction = async ({ request }) => {
  return await actionController(request);
}

export default function() {
  const returnLoaderData = useLoaderData<ILoaderProps>();
  const returnActionData = useActionData<IActionProps>();
  const transition = useTransition();

  return (
    <CreateRoomComponent 
      actionData={returnActionData}
      userCredentials={returnLoaderData} 
      isLoadingButton={!!transition.submission?.action}
    />
  );
}