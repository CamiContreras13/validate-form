const firebaseConfig = {
  apiKey: "AIzaSyAF0vBM_jcBNS86XKLJtLJqfZ_dWxQBREI",
  authDomain: "validate-form-c1d2f.firebaseapp.com",
  projectId: "validate-form-c1d2f",
  storageBucket: "validate-form-c1d2f.appspot.com",
  messagingSenderId: "48385727690",
  appId: "1:48385727690:web:a1b8692631c4a58ee4a833",
  measurementId: "G-NNDVKY2ENY",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

document.getElementById("formulario").addEventListener("submit", (event) => {
  event.preventDefault();
  let entradaNombre = document.getElementById("name");
  let errorNombre = document.getElementById("nameError");

  if (entradaNombre.value.trim() === "") {
    errorNombre.textContent = "Please, enter one name !";
    errorNombre.classList.add("error-message");
  } else {
    errorNombre.textContent = "";
    errorNombre.classList.remove("error-message");
  }

  let emailEntrada = document.getElementById("email");
  let emailError = document.getElementById("emailError");
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailEntrada.value)) {
    emailError.textContent = "Please, enter a valid email !";
    emailError.classList.add("error-message");
  } else {
    emailError.textContent = "";
    emailError.classList.remove("error-message");
  }

  let contrasenaEntrada = document.getElementById("password");
  let contrasenaError = document.getElementById("passwordError");
  let contrasenaPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;

  if (!contrasenaPattern.test(contrasenaEntrada.value)) {
    contrasenaError.textContent =
      "Password must have at least 8 characters, numbers, capital letters and special characters !";
    contrasenaError.classList.add("error-message");
  } else {
    contrasenaError.textContent = "";
    contrasenaError.classList.remove("error-message");
  }

  if (
    !errorNombre.textContent &&
    !emailError.textContent &&
    !contrasenaError.textContent
  ) {
    // Add a second document with a generated ID.
    db.collection("users")
      .add({
        nombre: entradaNombre.value,
        email: emailEntrada.value,
        password: contrasenaEntrada.value,
      })
      .then((docRef) => {
        alert("The form has been sent successfully ! 🚀",docRef.id);
        document.getElementById("formulario").reset();
      })
      .catch((error) => {
        alert(error);
      });
  };
});
