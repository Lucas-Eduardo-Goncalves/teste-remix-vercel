export async function checkFieldHandleCreateRoom(
  formData: FormData
): Promise<string | undefined> {
  const roomName = formData.get("roomName");
  if(!roomName) return undefined;

  return String(roomName).trim();
}