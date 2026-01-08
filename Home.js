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

const logo = document.getElementById("logo");

let angle = 0;
let last = performance.now();
let speed = 360 / 15;
let timeout;

function spin(now) {
  const seconds = (now - last) / 1000;
  last = now;

  angle += speed * seconds;
  angle %= 360;

  logo.style.transform = `rotate(${angle}deg)`;

  requestAnimationFrame(spin);
}
requestAnimationFrame(spin);

window.addEventListener("scroll", () => {
  speed = 360 / 2;

  clearTimeout(timeout);

  timeout = setTimeout(() => {
    speed = 360 / 15;
  }, 50);
});

const show = document.getElementById("show_product");
const show_display = document.getElementById("show_product_display");

const desc = {
  "Regular Cookies": "The classic favorite. Nutritious and packed with flavor. Perfect for a healthy snack. Contains dairy, oats, and gluten.",
  "Mini Cookies": "Small, yet fulfilling cookies. Perfect for sharing with your friends. Contains dairy, oats, and gluten.",
  "Keychain": "An aesthetic keychain to show off the importance of nutrition.",
  "Artwork": "Amazing artwork by our amazing artist. You could admire it all day.",
}

function ShowProduct(name) {
  show.classList.remove("hidden");
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";

  if (preorder_allow) {
  show_display.innerHTML = `
    <div class="img"><img src="${name}.jpg" alt="Cookies"></div>
    <div>
      <h1>${name}</h1>
      <p>${desc[name]}</p>
      <button onclick="Preorder()">Order Now</button>
      <button id="back" onclick="CloseShowProduct()">Back <img src="Right Arrow.png"></button>
    </div>`;
  } else {
    show_display.innerHTML = `
    <div class="img"><img src="${name}.jpg" alt="Cookies"></div>
    <div>
      <h1>${name}</h1>
      <p>${desc[name]}</p>
      <button onclick="Preorder()" style="cursor: not-allowed;" disabled>Coming Soon!</button>
      <button id="back" onclick="CloseShowProduct()">Back <img src="Right Arrow.png"></button>
    </div>`;
  }
};

function CloseShowProduct() {
  show.classList.add("hidden");
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
};

function Preorder() {
  location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdwnl_kyOfEeIXltYBZs7xOaLJYeECK2oA2zFIkTyDJIuvjdw/viewform?usp=header";
}

function WhatsApp() {
  location.href = "https://wa.me/6285839386163";
}

function Instagram() {
  location.href = "https://www.instagram.com/bloom._bites/";
}