const form = document.querySelector("form");
const eyePassword = document.getElementById("password");
const eyeShowHide = document.getElementById("showHide");
const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", (e) => {
  window.location.href = "/../index.html";
});

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

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  let newUser = JSON.parse(localStorage.getItem("users")) || [];
  const findUsername = newUser.find((e) => e.username === username);

  const users = {
    username,
    password,
  };

  if (findUsername) {
    findUsername.password = password;
    localStorage.setItem("users", JSON.stringify(newUser));
    alert("Ubah kata sandi berhasil!");
    form.reset();
  }
});
