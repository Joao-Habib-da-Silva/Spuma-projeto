const firebaseConfig = {
  apiKey: "AIzaSyCH7lpKD9aMWorbk_pk3mxlcGXt21GM6lM",
  authDomain: "spuma-banco.firebaseapp.com",
  projectId: "spuma-banco",
  storageBucket: "spuma-banco.appspot.com", // corrigido
  messagingSenderId: "447336546434",
  appId: "1:447336546434:web:23802d28de45fbedc2349b",
  measurementId: "G-4BJ95WYKF5",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

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
    const userCredential = await auth.createUserWithEmailAndPassword(email, senha);
    const user = userCredential.user;

    await db.collection("users").doc(user.uid).set({
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
