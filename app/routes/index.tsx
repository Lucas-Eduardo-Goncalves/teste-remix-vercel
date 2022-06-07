import { useActionData, useTransition } from "@remix-run/react";

import { SignInComponent } from "~/features/SignIn/SignInComponent";
import { actionController, loaderController } from "~/features/SignIn/api";

import type { IActionReturn } from "~/features/SignIn/types";
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
    <SignInComponent
      actionData={actionResponse} 
      isLoadingButton={!!transition.submission?.action}
    />
  );
}
