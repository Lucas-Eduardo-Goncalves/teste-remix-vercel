import { getFirestore } from "firebase/firestore";
import { firebaseApp } from "./firebase.config";

const firebaseFirestore = getFirestore(firebaseApp);

export { firebaseFirestore }