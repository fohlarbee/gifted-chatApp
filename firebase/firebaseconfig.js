import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import { firebaseConfig } from "../secrets/firebaseconfig.key";


// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const authentication = getAuth(app);
 export const db = getFirestore(app);