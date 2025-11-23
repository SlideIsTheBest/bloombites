const fade_up = document.querySelectorAll(".fade_up");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add("show");
    } else {
    entry.target.classList.remove('show');
    }
  });
});

fade_up.forEach(element => observer.observe(element));

const show = document.getElementById("show_product");
const show_display = document.getElementById("show_product_display");

const desc = {
  "Regular Cookies": "The classic favorite. Nutritious and packed with flavor. Perfect for a healthy snack.",
  "Mini Cookies": "Description for Mini Cookies.",
  "Keychain": "Description for Keychain.",
  "Artwork": "Description for Artwork.",
}

function ShowProduct(name) {
  show.classList.remove("hidden");
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";

  show_display.innerHTML = `
    <img src="/Cookies.webp" alt="Cookies">
    <div>
      <h1>${name}</h1>
      <p>${desc[name]}</p>
      <button onclick="location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdwnl_kyOfEeIXltYBZs7xOaLJYeECK2oA2zFIkTyDJIuvjdw/viewform?usp=header'">Order Now</button>
      <button id="back" onclick="CloseShowProduct()">Back <img src="/Right Arrow.png"></button>
    </div>
  `
};

function CloseShowProduct() {
  show.classList.add("hidden");
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
}