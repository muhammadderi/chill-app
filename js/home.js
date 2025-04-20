const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const movieScroll = document.querySelector(".movie-scroll");

btnLeft.addEventListener("click", () => {
  movieScroll.scrollBy({ left: -220, behavior: "smooth" });
});

btnRight.addEventListener("click", () => {
  movieScroll.scrollBy({ left: 220, behavior: "smooth" });
});

const btnLeft3 = document.querySelector(".chill-section3 .btn-left");
const btnRight3 = document.querySelector(".chill-section3 .btn-right");
const scroll3 = document.querySelector(".chill-section3 .movie-scroll-2");

btnLeft3.addEventListener("click", () => {
  scroll3.scrollBy({ left: -220, behavior: "smooth" });
});

btnRight3.addEventListener("click", () => {
  scroll3.scrollBy({ left: 220, behavior: "smooth" });
});

const btnLeft4 = document.querySelector(".chill-section4 .btn-left");
const btnRight4 = document.querySelector(".chill-section4 .btn-right");
const scroll4 = document.querySelector(".chill-section4 .movie-scroll-2");

btnLeft4.addEventListener("click", () => {
  scroll4.scrollBy({ left: -220, behavior: "smooth" });
});

btnRight4.addEventListener("click", () => {
  scroll4.scrollBy({ left: 220, behavior: "smooth" });
});

const btnLeft5 = document.querySelector(".chill-section5 .btn-left");
const btnRight5 = document.querySelector(".chill-section5 .btn-right");
const scroll5 = document.querySelector(".chill-section5 .movie-scroll-2");

btnLeft5.addEventListener("click", () => {
  scroll5.scrollBy({ left: -220, behavior: "smooth" });
});

btnRight5.addEventListener("click", () => {
  scroll5.scrollBy({ left: 220, behavior: "smooth" });
});
