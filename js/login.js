const form = document.querySelector("form");
const btnGoogle = document.getElementById("btnGoogle");
const eyePassword = document.getElementById("password");
const eyeShowHide = document.getElementById("showHide");

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

btnGoogle.addEventListener("click", (e) => {
  e.preventDefault();

  alert("Fitur belum tersedia 🚫");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const userDatas = JSON.parse(localStorage.getItem("users") || []);
  console.log(userDatas);
  const findUsername = userDatas.find(
    (e) => e.username === username && e.password === password
  );

  const users = {
    username,
    password,
  };

  if (findUsername) {
    localStorage.setItem("userLogin", JSON.stringify(users));
    alert("Login Sukses!");
    form.reset();
    window.location.href = "/../home.html";
  } else {
    alert("Username atau password gagal ❌");
  }
});
