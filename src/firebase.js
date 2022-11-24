import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDViQf1Vjg96P-ZljTVHKcC4-e-edUh77E",
    authDomain: "disneyplus-clone-4f5a2.firebaseapp.com",
    projectId: "disneyplus-clone-4f5a2",
    storageBucket: "disneyplus-clone-4f5a2.appspot.com",
    messagingSenderId: "58242444824",
    appId: "1:58242444824:web:5e97420a07425aa4e0dd6d"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();


  export { auth, provider};
