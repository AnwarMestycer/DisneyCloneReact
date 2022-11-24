// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { collection, getFirestore, getDocs } from 'firebase/firestore';
// import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJhMcM5CMXErCIjc_6Ww6kBAY6pM5USEk",
  authDomain: "project101-afb4b.firebaseapp.com",
  projectId: "project101-afb4b",
  storageBucket: "project101-afb4b.appspot.com",
  messagingSenderId: "933608497946",
  appId: "1:933608497946:web:4db85b2f9dc59bd0c202a3",
  measurementId: "G-MXCBCNVMD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore();
// const user = collection(db, 'user');

const auth = getAuth()
getDocs(user).then((snapshot)=> {
    console.log(snapshot.docs)
})

const addForm = document.getElementById('add')
addForm.onsubmit = add();

function add(e){
    add(user, {
        name: addForm.name.value,
        name: addForm.nationality.value,
        name: addForm.age.value
    }).then(() => {
        addForm.reset()
    })
    
    
    //signup auth
    
    function auth(e){
        e.preventDefault()
        createUserWithEmailAndPassword(auth, signupForm.email.value, signupForm.password.value)
        .then(()=> {
            console.log('authentified')
            console.log("user Created successfully")
            signupForm.reset()
        })
    }
    signupForm.onsubmit = auth()
}
