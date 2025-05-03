"use strict";
const style =
  "padding: 20px; color: white; background: linear-gradient(#007acc, #0952bf, #03a1d8, #0916bf);font-family: sans-serif; border-radius:10px; text-shadow: 0.6px 0.6px black;border:1px solid white";

console.log(
  "%c                                             ▪◽⚜🤍💙Ahmed Mahmoud Nadim💙🤍⚜◽▪                                                       ",
  style
);

let myNewDay = Date();

console.log(myNewDay);
////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Ahmed Nadim",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Hanem Mohamed",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Mahmoud Ahmed Mahmoud",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Hassan Hussein",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//////////////////////////////////////// //////////////////////////////////////// /////////////////////////////////////////
////////////////////////////////////////CREATE VARIABLE////////////////////////////////////////

const body = document.querySelector("body");
const forBackground = document.querySelector(".forBackground");
const main = document.querySelector("main");
const navTop = document.querySelector("nav");
//====== NAV variables ======//
const logo = document.querySelector(".logo");
const welcome = document.querySelector(".welcome");
const login = document.querySelector(".login");
const loginUser = document.querySelector(".login__input--user");
const loginPin = document.querySelector(".login__input--pin");
const loginButton = document.querySelector(".login__btn");
////////////////////////////////////////

//======Current Balance Variables======//
const balanceValueNumber = document.querySelector(".balance_value_number");
const balanceValueCurrency = document.querySelector(".balance_value_currency");
////////////////////////////////////////

//======Movements Variables======//
const movements = document.querySelector(".movements");
const movementDeposit = document.querySelector(".movements__type--deposit");
const movementWithdraw = document.querySelector(".movements__type--withdraw");
const movementValue = document.querySelector(".movements_value_number");
const movementCurrency = document.querySelector(".movements_value_currency");
////////////////////////////////////////

//======Transfer Money Variables======//
const transferToUser = document.querySelector(".form__input--to");
const transferToAmount = document.querySelector(".form__input--amount");
const transferToButton = document.querySelector(".form__btn--transfer");
////////////////////////////////////////

//======Request Loan Variables======//
const loanAmount = document.querySelector(".form__input--loan-amount");
const loanButton = document.querySelector(".form__btn--loan");
////////////////////////////////////////

//======Close Account Variables======//
const confirmUser = document.querySelector(".form__input--user");
const confirmPIN = document.querySelector(".form__input--pin");
const confirmButton = document.querySelector(".form__btn--close");
////////////////////////////////////////

//======Summary Variables======//
const summaryIn = document.querySelector(".summary__value--in");
const summaryOut = document.querySelector(".summary__value--out");
const summaryInterest = document.querySelector(".summary__value--interest");
////////////////////////////////////////

///////////////////////////////////////// //////////////////////////////////////// ////////////////////////////////////////

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  logo.style.height = "14.25rem";
  welcome.style.alignSelf = "center";
  login.style.alignSelf = "center";
  forBackground.style.filter = "opacity(0.2)";
  main.classList.remove("hidden");
  navTop.style.padding = "0 5rem";

  account1.movements.forEach((movement, i) => {
    let type;
    type = movement > 0 ? `deposit` : `withdraw`;
    movements.insertAdjacentHTML(
      "afterbegin",
      `<div class="movements__row">
              <div class="movements__type movements__type--${type}">
                ${i} ${type}
              </div>
              <div class="movements__value">
                <span class="movements_value_number">${movement}</span>
                <span class="movements_value_currency"> € </span>
              </div>
            </div>`
    );
  });
});
