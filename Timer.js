const timer = document.getElementById("timer");
const timer_mobile = document.getElementById("timer_mobile");
const preorder = document.getElementById("preorder");

const start_date = new Date(2025, 11, 3, 0, 0, 0).getTime();  // Month starts with 0 (January)
const end_date = new Date(2025, 11, 10, 23, 59, 59).getTime();  // Month starts with 0 (January)

const countdown = setInterval(() => {
  const now = new Date().getTime();

  const start_diff = start_date - now;
  const end_diff = end_date - now;

  if (start_diff >= 0) {
    const days = Math.floor(start_diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((start_diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((start_diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((start_diff % (1000 * 60)) / 1000);

    timer.style.fontSize = "15px";
    timer_mobile.style.fontSize = "15px";

    if (days > 0) {
    timer.innerHTML = `Opening in ${days}d ${hours}h ${minutes}m ${seconds}s`;
    timer_mobile.innerHTML = `Opening in ${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      timer.innerHTML = `Opening in ${hours}h ${minutes}m ${seconds}s`;
      timer_mobile.innerHTML = `Opening in ${hours}h ${minutes}m ${seconds}s`; 
    }
    preorder.disabled = true;
    return;
  } else if (end_diff <= 0) {
    timer.innerHTML = "Coming Soon!";
    timer_mobile.innerHTML = "Coming Soon!";
    preorder.disabled = true;
    clearInterval(countdown);
    return;
  }

  preorder.disabled = false;

  const days = Math.floor(end_diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((end_diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((end_diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((end_diff % (1000 * 60)) / 1000);

  timer.style.fontSize = "18px";
  timer_mobile.style.fontSize = "18px";

  if (days > 0) {
    timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    timer_mobile.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    timer.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
    timer_mobile.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

}, 1000);

