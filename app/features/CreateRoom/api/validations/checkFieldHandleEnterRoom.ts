export async function checkFieldHandleEnterRoom(
  formData: FormData
): Promise<string | undefined> {
  const roomId = formData.get("roomId");
  if(!roomId) return undefined;

  return String(roomId).trim();
}