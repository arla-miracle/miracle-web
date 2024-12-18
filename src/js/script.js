// Navba Menu
const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector(".navbar");
const navmenu = document.querySelectorAll(".navMenu");

hamburger.addEventListener("click", function () {
  navbar.classList.toggle("left-[100rem]");
  navbar.classList.toggle("left-0");
});
navmenu.forEach((n) =>
  n.addEventListener("click", function () {
    navbar.classList.remove("left-0");
    navbar.classList.add("left-[100rem]");
  })
);

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("left-0");
    navbar.classList.add("left-[100rem]");
  }
});
// 'e' (event) adalah objek yang berisi informasi tentang event, seperti:
// - e.target: Elemen yang diklik.
// - e.type: Jenis event (misal: 'click', 'keydown').
// - e.preventDefault(): Mencegah aksi default browser (misal: menghindari form submit).

// contains() memeriksa apakah elemen mengandung elemen lain di dalamnya.
// - element.contains(childElement) mengembalikan 'true' jika childElement ada dalam element.
// - Misal: hamburger.contains(e.target) memeriksa apakah elemen yang diklik (e.target) ada di dalam tombol hamburger.

// Navba Menu End
