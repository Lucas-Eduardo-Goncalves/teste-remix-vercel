// Return Functions
export type IActionReturn = {
  message: string;
} | undefined;

export type ICheckLoginFieldsReturn = {
  email: string | undefined;
  password: string | undefined;
};

// Components
export type ISignInComponent = {
  actionData: IActionReturn;
  isLoadingButton: boolean;
};