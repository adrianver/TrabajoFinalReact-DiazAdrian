import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {

    apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
    authDomain: "ebooktandil.firebaseapp.com",
    projectId: "ebooktandil",
    storageBucket: "ebooktandil.appspot.com",
    messagingSenderId: "63919128646",
    appId: "1:63919128646:web:40a6f89aef6503b9a68a47"

}

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)