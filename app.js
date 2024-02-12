const inputValue = document.querySelector("#input-value");
const btn = document.querySelector("#btn");
const copyBtn = document.querySelector("#icon");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "!@#%^&*(){}?~/+-=_";
const total = upperCase + lowerCase + numbers + symbol;
let password = "";
const len = 10;

function generatePassword() {
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (len > password.length) {
    password += total[Math.floor(Math.random() * total.length)];
  }

  inputValue.value = password;
  password = "";
}

btn.addEventListener("click", (e) => {
  console.log("button clicked");
  e.preventDefault();
  generatePassword();
});

copyBtn.addEventListener("click", () => {
  inputValue.select();
  document.execCommand("copy");
  alert("Copied to Clipboard");
  inputValue.value = "";
});
