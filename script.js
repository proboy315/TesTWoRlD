const modal = document.getElementById("authModal");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

function showLoginForm() {
  signupForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
}

function showSignupForm() {
  loginForm.classList.add("hidden");
  signupForm.classList.remove("hidden");
}

function loginUser(e) {
  e.preventDefault();
  alert("Logged in (fake alert - backend needed)");
  closeModal();
}

function signupUser(e) {
  e.preventDefault();
  alert("Signed up (fake alert - backend needed)");
  closeModal();
}

// Optional: Close modal if clicked outside content
window.onclick = function (e) {
  if (e.target === modal) closeModal();
};
