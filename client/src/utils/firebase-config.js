import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_xThTM3MmFKIKNoQfN5RjSIYQSgGiXOI",
  authDomain: "netflix-clone-2783f.firebaseapp.com",
  projectId: "netflix-clone-2783f",
  storageBucket: "netflix-clone-2783f.appspot.com",
  messagingSenderId: "290930637914",
  appId: "1:290930637914:web:eec007b157105abaeb6c63",
  measurementId: "G-W29C39EQH9"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)