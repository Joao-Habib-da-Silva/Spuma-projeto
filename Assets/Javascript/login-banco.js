import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js"
const firebaseConfig = {
  apiKey: "AIzaSyCH7lpKD9aMWorbk_pk3mxlcGXt21GM6lM",
  authDomain: "spuma-banco.firebaseapp.com",
  projectId: "spuma-banco",
  storageBucket: "spuma-banco.appspot.com",
  messagingSenderId: "447336546434",
  appId: "1:447336546434:web:23802d28de45fbedc2349b",
  measurementId: "G-4BJ95WYKF5",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const botao = window.document.getElementById("button-enviar")
const botao_google = window.document.getElementById("google-button")
var provider = new GoogleAuthProvider()
botao.addEventListener("click", async function() {
    try {
        const email = window.document.getElementById("email").value
        const senha = window.document.getElementById("senhas").value
        const cred = await signInWithEmailAndPassword(auth, email, senha)
        console.log("user cadastrado")
    }catch(error) {
        console.error(error)
        }
})
botao_google.addEventListener("click", async function() {
  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    return user
  }catch(error) {
    console.error(error)
    throw error
  }
})