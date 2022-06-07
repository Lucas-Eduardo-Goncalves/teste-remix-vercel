export async function checkFieldsCloseRoom(
  formData: FormData
): Promise<string | undefined> {
  const userRole = formData.get("userRole");
  if(!userRole) return undefined;

  return String(userRole).trim();
}