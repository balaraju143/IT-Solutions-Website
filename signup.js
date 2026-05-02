window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.6s";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});


// ================= SIGNUP FORM =================

const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Signup Successful 🎉");

    // redirect to login page
    window.location.href = "login.html";
  });
}