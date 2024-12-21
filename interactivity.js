const loginBtn = document.getElementById("login");
const loginArea = document.getElementById("login-area");
const transactionArea = document.getElementById("transaction-area");

const inputDeposite = document.getElementById("input-deposite");
const inputWithdraw = document.getElementById("input-withdraw");
const inputDepositeBtn = document.getElementById("input-deposite-btn");
const inputWithdrawBtn = document.getElementById("input-withdraw-btn");
const depositeEl = document.getElementById("deposite-money-el");
const withdrawEl = document.getElementById("withdraw-money-el");
const balanceEl = document.getElementById("balance-money-el");

loginBtn.addEventListener("click", function (e) {
  loginArea.style.display = "none";
  transactionArea.style.display = "block";
});

let currentDeposite = 0;
let currentBalance = 1200;
let currentWithdraw = 0;
inputDepositeBtn.addEventListener("click", function (e) {
  const depositeMoney = parseFloat(inputDeposite.value);
  currentDeposite = currentDeposite + depositeMoney;
  depositeEl.innerText = `$${currentDeposite}`;
  currentBalance = currentBalance + depositeMoney;
  balanceEl.innerText = `$${currentBalance}`;
  inputDeposite.value = "";
});

inputWithdrawBtn.addEventListener("click", function (e) {
  const withdrawMoney = parseFloat(inputWithdraw.value);
  currentWithdraw = currentWithdraw + withdrawMoney;
  withdrawEl.innerText = `$${currentWithdraw}`;
  currentBalance = currentBalance - withdrawMoney;
  balanceEl.innerText = `$${currentBalance}`;
  inputWithdraw.value = "";
});
