import { useActionData, useTransition } from "@remix-run/react";

import { SignUpComponent } from "~/features/SignUp/SignUpComponent";
import { actionController, loaderController } from "~/features/SignUp/api";

import type { IActionReturn } from "~/features/SignUp/types";
import type { ActionFunction, LoaderFunction} from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  return await loaderController(request);
}

export const action: ActionFunction = async ({ request }) => {
  return await actionController(request);
}

export default function() {
  const actionResponse = useActionData<IActionReturn>();
  const transition = useTransition();

  return (
    <SignUpComponent 
      actionData={actionResponse} 
      isLoadingButton={!!transition.submission?.action} 
    />
  )
}