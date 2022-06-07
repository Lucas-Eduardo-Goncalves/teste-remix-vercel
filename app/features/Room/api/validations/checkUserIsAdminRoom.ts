import type { ICheckUserIsAdminRoomProps } from "../../types";

export function checkUserIsAdminRoom({ userId, roomAdmin }: ICheckUserIsAdminRoomProps) {
  if(userId === roomAdmin.id) return "admin";
  return "normalUser";
}