const generateButton = document.querySelector("#generate-button");
const passwordInput = document.querySelector("#password");

generateButton.addEventListener("click", function() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let password = "";

  for (let i = 0; i < 12; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  passwordInput.value = password;
});
