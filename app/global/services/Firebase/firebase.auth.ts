import { getAuth } from "firebase/auth";
import { firebaseApp } from "./firebase.config";

const firebaseAuth = getAuth(firebaseApp);
export { firebaseAuth };