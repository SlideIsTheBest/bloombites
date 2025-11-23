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