import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDspCHrAkmjZiW5Dx290-9VoxF-fDMW-88",
  authDomain: "project-scrum-f77f5.firebaseapp.com",
  databaseURL: "https://project-scrum-f77f5-default-rtdb.firebaseio.com",
  projectId: "project-scrum-f77f5",
  storageBucket: "project-scrum-f77f5.appspot.com",
  messagingSenderId: "541333707492",
  appId: "1:541333707492:web:c1beb8ecd41fe565752af1"
};

const firebaseApp = initializeApp(firebaseConfig);

export { firebaseConfig, firebaseApp };