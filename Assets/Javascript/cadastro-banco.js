import { initializeApp } from "https://www.gstatic.com/firebasejs/11.30.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.30.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.30.0/firebase-firestore.js";
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
const db = getFirestore(app);

const cadastroligar = document.getElementById("button-enviar");

cadastroligar.addEventListener("click", async function () {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha1").value;
  const data = document.getElementById("idade").value;

  if (!email || !senha || !data) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      nascimento: data,
      criadoEm: new Date(),
    });

    alert("Usuário cadastrado com sucesso!");
  } catch (error) {
    console.error("Erro ao cadastrar:", error.message);
    alert("Erro ao cadastrar: " + error.message);
  }
});
