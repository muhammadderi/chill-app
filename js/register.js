const form = document.querySelector("form");
const btnGoogle = document.getElementById("btnGoogle");
const eyePassword = document.getElementById("password");
const eyeConfirmPassword = document.getElementById("confirmPassword");
const eyeShowHide = document.getElementById("showHide");
const eyeShowHidePassword = document.getElementById("showHidePassword");

eyeConfirmPassword.type = "password";
eyePassword.type = "password";
eyeShowHide.innerHTML = '<img src="/images/eye-password.png" />';
eyeShowHide.style.cursor = "pointer";

eyeShowHide.addEventListener("click", (e) => {
  e.preventDefault();

  if (eyePassword.type === "password") {
    eyePassword.type = "text";
    eyeShowHide.innerHTML = '<img src="/images/show-password.png" />';
  } else {
    eyePassword.type = "password";
    eyeShowHide.innerHTML = '<img src="/images/eye-password.png" />';
  }
});

eyeShowHidePassword.addEventListener("click", (e) => {
  e.preventDefault();

  if (eyeConfirmPassword.type === "password") {
    eyeConfirmPassword.type = "text";
    eyeShowHide.innerHTML = '<img src="/images/show-password.png" />';
  } else {
    eyeConfirmPassword.type = "password";
    eyeShowHide.innerHTML = '<img src="/images/eye-password.png" />';
  }
});

btnGoogle.addEventListener("click", (e) => {
  e.preventDefault();

  alert("Fitur belum tersedia 🚫");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const newUser = JSON.parse(localStorage.getItem("users")) || [];
  const findUsername = newUser.find((e) => e.username === username);

  const users = {
    username,
    password,
    confirmPassword,
  };

  if (password !== confirmPassword) {
    alert("Kata sandi tidak sama!");
  } else if (findUsername) {
    alert("Username sudah pernah digunakan!");
  } else {
    newUser.push(users);
    localStorage.setItem("users", JSON.stringify(newUser));
    alert("Pendaftaran sukses!");

    form.reset();
  }
});
