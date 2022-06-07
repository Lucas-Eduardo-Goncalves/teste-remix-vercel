export function validationErrosFirebase(error: string) {  
  switch (error) {
    case "auth/network-request-failed":
      return { message: "Falha na solicitação de rede" }
      
    case "auth/weak-password":
      return { message: "Senha muito fraca" }

    case "auth/email-already-in-use":
      return { message: "Este e-mail já está em uso" }

    case "auth/too-many-requests":
      return { message: "Muitos requisições, aguarde um momento" }

    case "auth/user-not-found":
      return { message: "Usuário não existe" }

    case "auth/wrong-password":
      return { message: "Senha incorreta" }

    case "auth/invalid-email":
      return { message: "E-mail inválido" }
    
    default: 
      return { message: error };
  }
}