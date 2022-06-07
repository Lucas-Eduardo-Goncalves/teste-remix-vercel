import type { IReturnFetchDataRoom, IRoomConfig, IUserInsideInTheRoom } from "~/global/types";

// Props
export type ICheckUserIsAdminRoomProps = {
  userId: string;
  
  roomAdmin: {
    email: string;
    id: string;
  };
}

export type IUserCredentials = {
  userEmail: string;
  userId: string;
}

export type IUserTheRoomProps = IUserInsideInTheRoom;

// Component
export type IRoomComponent = {
  userRole: "admin" | "normalUser";
  roomData: IReturnFetchDataRoom;
  userCredentials: IUserCredentials;
}

export type IPokerTableComponent = {
  roomConfig: IRoomConfig;
  userRole: "admin" | "normalUser";
  usersInsideInTheRoom: IUserInsideInTheRoom[];
}