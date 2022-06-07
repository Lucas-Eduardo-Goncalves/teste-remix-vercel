// Props
export type IUserCredentialsProps = {
  userEmail: string;
  userId: string;
}

// Functions Return
export type ILoaderReturn = IUserCredentialsProps

export type IActionReturn = { 
  message: string; 
} | undefined;

// Component
export type ICreateRoomComponent = {
  isLoadingButton: boolean;
  actionData: IActionReturn;
  userCredentials: IUserCredentialsProps;
}