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