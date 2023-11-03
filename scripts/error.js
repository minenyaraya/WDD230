const emailField = document.querySelector("input");

emailField.addEventListener("input", () => {
  emailField.setCustomValidity("");
  emailField.checkValidity();
  console.log(emailField.checkValidity());
});

emailField.addEventListener("invalid", () => {
  emailField.setCustomValidity("Please fill your email.");
});
