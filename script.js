const toggleBtn = document.querySelector(".toggle-btn");
const menuMd = document.querySelector(".menu-md");

toggleBtn.addEventListener("click", () => {
  menuMd.classList.toggle("active");
});

// kode diatas untuk membuat saat ukuran layar nya laptop/hp maka itu berguna untuk memunculkan menu saat di klik menu hamburger nya
