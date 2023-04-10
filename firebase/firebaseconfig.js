import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC0npvRwLWwG-TcMHQVekfMQutCzDNXUpA",
  authDomain: "giftedchatapp-fde9c.firebaseapp.com",
  projectId: "giftedchatapp-fde9c",
  storageBucket: "giftedchatapp-fde9c.appspot.com",
  messagingSenderId: "909302892900",
  appId: "1:909302892900:web:8a8601ee18fdd15a739271"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const authentication = getAuth(app);
 export const db = getFirestore(app);