import type { ICheckLoginFieldsReturn } from "../../types";

export async function checkLoginFields(formData: FormData): Promise<ICheckLoginFieldsReturn> {
  const email = formData.get("email");
  const password = formData.get("password");

  if(!email || !password) {
    return {
      email: undefined,
      password: undefined,
    }
  }

  return { 
    email: String(email), 
    password: String(password),
  }
}