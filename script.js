// =============================
// MENU TOGGLE
// =============================
function openMenu() {
  const menu = document.getElementById("menu");
  menu.classList.add("active");
}

function closeMenu() {
  const menu = document.getElementById("menu");
  menu.classList.remove("active");
}

// Close menu when clicking link
document.querySelectorAll(".menu-box a").forEach(link => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});


// =============================
// SCROLL REVEAL ANIMATION
// =============================
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// =============================
// STICKY HEADER EFFECT
// =============================
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.style.background = "rgba(0,0,0,0.8)";
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.style.background = "transparent";
  }
});


// =============================
// ACTIVE MENU LINK HIGHLIGHT
// =============================
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".menu-box a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.background = "orange";
    link.style.color = "black";
  }
});


// =============================
// PAGE LOAD FADE-IN
// =============================
document.body.style.opacity = "0";

window.addEventListener("load", () => {
  document.body.style.transition = "opacity 0.6s ease";
  document.body.style.opacity = "1";
});


// =============================
// BUTTON RIPPLE EFFECT
// =============================
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    circle.classList.add("ripple");

    const rect = this.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left + "px";
    circle.style.top = e.clientY - rect.top + "px";

    this.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 500);
  });
});

// ================= LOGIN FORM =================

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Login Successful 🚀");

    // redirect to dashboard
    window.location.href = "dashboard.html";
  });
}