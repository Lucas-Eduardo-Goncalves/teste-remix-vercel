export async function checkFieldHandleCard(
  formData: FormData
): Promise<string | undefined> {
  const cardValue = formData.get("cardValue");
  if(!cardValue) return undefined;

  return String(cardValue).trim();
}