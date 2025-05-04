const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const movieScroll = document.querySelector(".movie-scroll");
const btnLeft3 = document.querySelector(".chill-section3 .btn-left");
const btnRight3 = document.querySelector(".chill-section3 .btn-right");
const scroll3 = document.querySelector(".chill-section3 .movie-scroll-2");
const btnLeft4 = document.querySelector(".chill-section4 .btn-left");
const btnRight4 = document.querySelector(".chill-section4 .btn-right");
const scroll4 = document.querySelector(".chill-section4 .movie-scroll-2");
const btnLeft5 = document.querySelector(".chill-section5 .btn-left");
const btnRight5 = document.querySelector(".chill-section5 .btn-right");
const scroll5 = document.querySelector(".chill-section5 .movie-scroll-2");
const genreClick = document.querySelector(".footer-left h3");
const bantuanClick = document.querySelector(".footer-right h3");
const audio = document.getElementById("myAudio");
const icon = document.getElementById("speakerIcon");
const button = document.querySelector(".muted-speaker");
const logout = document.querySelector(".logout");

btnLeft.addEventListener("click", () => {
  movieScroll.scrollBy({ left: -220, behavior: "smooth" });
});

btnRight.addEventListener("click", () => {
  movieScroll.scrollBy({ left: 220, behavior: "smooth" });
});

btnLeft3.addEventListener("click", () => {
  scroll3.scrollBy({ left: -220, behavior: "smooth" });
});

btnRight3.addEventListener("click", () => {
  scroll3.scrollBy({ left: 220, behavior: "smooth" });
});

btnLeft4.addEventListener("click", () => {
  scroll4.scrollBy({ left: -220, behavior: "smooth" });
});

btnRight4.addEventListener("click", () => {
  scroll4.scrollBy({ left: 220, behavior: "smooth" });
});

btnLeft5.addEventListener("click", () => {
  scroll5.scrollBy({ left: -220, behavior: "smooth" });
});

btnRight5.addEventListener("click", () => {
  scroll5.scrollBy({ left: 220, behavior: "smooth" });
});

genreClick.addEventListener("click", function () {
  const genre = document.querySelector(".footer-main");

  if (genre.style.display === "none") {
    genre.style.display = "block";
    arrow.style.content = "V";
  } else {
    genre.style.display = "none";
  }
});

bantuanClick.addEventListener("click", function () {
  const bantuan = document.querySelector(".footer-main2");

  if (bantuan.style.display === "none") {
    bantuan.style.display = "block";
  } else {
    bantuan.style.display = "none";
  }
});

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.play().catch((err) => {
      console.warn("Play error:", err);
    });
  }
  audio.muted = !audio.muted;

  icon.src = audio.muted ? "/images/speaker.png" : "/images/muted-speaker.png";
});

logout.addEventListener("click", function () {
  localStorage.removeItem("userLogin");
  localStorage.removeItem("users");
  window.location.href = "/";
});
