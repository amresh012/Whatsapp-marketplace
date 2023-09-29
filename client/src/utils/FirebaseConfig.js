// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyDqn-t7FPs1-AsIzsviBRuY9abY2-fpjyw",
    authDomain: "whatsapp-clone-e8d5d.firebaseapp.com",
    projectId: "whatsapp-clone-e8d5d",
    storageBucket: "whatsapp-clone-e8d5d.appspot.com",
    messagingSenderId: "42182162884",
    appId: "1:42182162884:web:e434d64c18c7429f15cc91"
  };

  const app = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app);