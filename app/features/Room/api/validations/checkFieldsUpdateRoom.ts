export async function checkFieldHandlUpdateRoom(
  formData: FormData
) {
  const adminEmail = formData.get("adminEmail");
  const roomName = formData.get("roomName");
  const sequencyName = formData.get("sequencyName");

  if(!adminEmail || !roomName || !sequencyName) return undefined;

  return {
    adminEmail: String(adminEmail),
    roomName: String(roomName),
    sequencyName: String(sequencyName),
  };
}