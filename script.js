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
////////////////////////////////////////
////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Ahmed Nadim",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  movements1: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EGP",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Hanem Mohamed",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  movements1: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account3 = {
  owner: "Mahmoud Ahmed Mahmoud",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  movements1: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account4 = {
  owner: "Hassan Hussein",
  movements: [430, 1000, 700, 50, 90],
  movements1: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const accounts = [account1, account2, account3, account4];

//======UserNames======//

accounts.forEach((account) => {
  account.username = account.owner
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toLowerCase();
});

let usernames = [];
accounts.forEach((account) => {
  usernames.push(account.username);
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////CREATE VARIABLE////////////////////////////////////////
//======For Date======//
const mainDate = new Date();
const today = `${mainDate.getDate()}`.padStart(2, 0);
const theMonth = `${mainDate.getMonth() + 1}`.padStart(2, 0);
const theYear = mainDate.getFullYear();
const theHour = `${mainDate.getHours()}`.padStart(2, 0);
const theMinute = `${mainDate.getMinutes()}`.padStart(2, 0);
//======For Body======//
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
const date = document.querySelector(".date");
////////////////////////////////////////

//======Movements Variables======//
const movementsAll = document.querySelector(".movements");
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
const sortDown = document.querySelector(".btn--sort--down");
const sortUp = document.querySelector(".btn--sort--up");
const returnSort = document.querySelector(".btn--sort--return");
////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////CREATE EVENTS//////////////////////////////////////// //////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//====== Display Current User Movements ======//
const displayMovements = function (account) {
  account.movements.forEach((movement, i) => {
    let type;
    type = movement > 0 ? `deposit` : `withdraw`;
    let displayDate = new Date(account.movementsDates[i]);
    const today = `${displayDate.getDate()}`.padStart(2, 0);
    const theMonth = `${displayDate.getMonth() + 1}`.padStart(2, 0);
    const theYear = displayDate.getFullYear();
    const theHour = `${displayDate.getHours()}`.padStart(2, 0);
    const theMinute = `${displayDate.getMinutes()}`.padStart(2, 0);

    movementsAll.insertAdjacentHTML(
      "afterbegin",
      `<div class="movements__row">
            <div class="movements__type movements__type--${type}">
              ${i + 1} ${type}
            </div>
            <div class="movements__date">${today}/${theMonth}/${theYear}, ${theHour}:${theMinute}</div>
            <div class="movements__value">
              
              <span class="movements_value_currency"> <span class="movements_value_number">${movement}</span>€ </span>
            </div>
          </div>`
    );
  });
};
const displayMovementsReturn = function (account) {
  account.movements1.forEach((movement, i) => {
    let type;
    type = movement > 0 ? `deposit` : `withdraw`;
    let displayDate = new Date(account.movementsDates[i]);
    const today = `${displayDate.getDate()}`.padStart(2, 0);
    const theMonth = `${displayDate.getMonth() + 1}`.padStart(2, 0);
    const theYear = displayDate.getFullYear();
    const theHour = `${displayDate.getHours()}`.padStart(2, 0);
    const theMinute = `${displayDate.getMinutes()}`.padStart(2, 0);
    movementsAll.insertAdjacentHTML(
      "afterbegin",
      `<div class="movements__row">
            <div class="movements__type movements__type--${type}">
              ${i + 1} ${type}
            </div>
            <div class="movements__date">${today}/${theMonth}/${theYear}, ${theHour}:${theMinute}</div>
            <div class="movements__value">
              
              <span class="movements_value_currency"> <span class="movements_value_number">${movement}</span>€ </span>
            </div>
          </div>`
    );
  });
};
//////////////////////////////////////// //////////////////////////////////////// ////////////////////////////////////////
//======CURRENT BALANCE======//

const displayCurrentBalance = function (account) {
  account.movements.reduce((acc, curr) => {
    return (balanceValueNumber.textContent = acc + curr);
  });
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//====== Total Deposit & Withdraw======//

const displayTotalDepositWithdrawInterest = function (account) {
  let totalDeposit = 0;
  let totalWithdraw = 0;
  account.movements.forEach(function (movement) {
    if (movement > 0) {
      return (totalDeposit += movement);
    } else if (movement < 0) {
      return (totalWithdraw += movement);
    }
  });
  summaryIn.textContent = totalDeposit;
  summaryOut.textContent = Math.abs(totalWithdraw);
  //////////////////////////////////////// //////////////////////////////////////// ////////////////////////////////////////
  //======Interest======//
  summaryInterest.textContent = (totalDeposit * currentUser.interestRate) / 100;
};

//////////////////////////////////////// //////////////////////////////////////// ////////////////////////////////////////
//======Transfer Money======//
const TransferMoney = function (account) {
  let transferTo = accounts.find(
    (account) => account.username === transferToUser.value
  );

  if (transferTo.username === transferToUser.value) {
    if (
      Number(transferToAmount.value) > 0 &&
      Number(balanceValueNumber.textContent) >=
        Number(transferToAmount.value) &&
      transferToUser.value !== currentUser &&
      transferToUser.value
    ) {
      transferTo.movements.push(Number(transferToAmount.value));
      transferTo.movementsDates.push(mainDate);
      currentUser.movements.push(-Number(transferToAmount.value));
      currentUser.movementsDates.push(mainDate);
      transferToUser.value = "";
      transferToAmount.value = "";
    }
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //======Close Current Account======//
// confirmButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (
//     confirmUser.value === currentUser.username &&
//     Number(confirmPIN.value) === currentUser.pin
//   ) {
//     const currentUserIndex = accounts.findIndex(currentUser);
//     accounts.splice(currentUserIndex, 1);
//     main.classList.add("hidden");
//     logo.style.height = "34.25rem";
//     forBackground.style.filter = "opacity(1)";
//     welcome.textContent = "Log in to get started";
//   }
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//======LOGIN EVENT======//

let currentUser;

loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  //======Create Current User======//

  currentUser = accounts.find(
    (account) => account.username === loginUser.value
  );

  //====== If Statement to log current user with his pin ======//

  if (
    loginUser.value === currentUser.username &&
    Number(loginPin.value) === currentUser.pin
  ) {
    //====== Change Background, navbar, logo size, and the app appearance ======//

    logo.style.height = "16.25rem";
    welcome.style.alignSelf = "center";
    login.style.alignSelf = "center";
    forBackground.style.filter = "opacity(0.2)";
    main.classList.remove("hidden");
    navTop.style.padding = "0 5rem";
    welcome.textContent = `Welcome, ${currentUser.owner.split(" ")[0]}`;
    loginUser.value = "";
    loginPin.value = "";
    movementsAll.textContent = "";

    //======Display current user movements======//
    displayMovements(currentUser);
    //======Display current user Balance======//
    displayCurrentBalance(currentUser);
    //======Display Total Deposit, Withdraw, and interest======//
    displayTotalDepositWithdrawInterest(currentUser);
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//======Transfer Event======//
transferToButton.addEventListener("click", (e) => {
  e.preventDefault();

  TransferMoney(transferToUser.value);
  displayMovements(currentUser);
  displayCurrentBalance(currentUser);
  displayTotalDepositWithdrawInterest(currentUser);
});
//////////////////////////////////////// //////////////////////////////////////// ////////////////////////////////////////
//======Close Current Account======//
confirmButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    confirmUser.value === currentUser.username &&
    Number(confirmPIN.value) === currentUser.pin
  ) {
    const currentUserIndex = accounts.findIndex(
      (account) => account.username === currentUser.username
    );
    accounts.splice(currentUserIndex, 1);
    main.classList.add("hidden");
    logo.style.height = "34.25rem";
    forBackground.style.filter = "opacity(1)";
    welcome.textContent = "Log in to get started";
    welcome.style.alignSelf = "flex-start";
    welcome.style.paddingTop = "6rem";
    login.style.alignSelf = "flex-start";
    login.style.paddingTop = "6rem";
    displayMovements(currentUser);
    displayCurrentBalance(currentUser);
    displayTotalDepositWithdrawInterest(currentUser);
  }
});
//////////////////////////////////////// //////////////////////////////////////// ////////////////////////////////////////
//======Loan Request======//
loanButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    currentUser.movements.some(
      (movement) => movement >= (10 / 100) * Number(loanAmount.value)
    )
  ) {
    currentUser.movements.push(Number(loanAmount.value));
    loanAmount.value = "";
    currentUser.movementsDates.push(mainDate);
    displayMovements(currentUser);
    displayCurrentBalance(currentUser);
    displayTotalDepositWithdrawInterest(currentUser);
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//======Sort Descending=======//
sortDown.addEventListener("click", (e) => {
  e.preventDefault();
  currentUser.movements.sort((a, b) => (a > b ? 1 : -1));
  movementsAll.textContent = "";
  displayMovements(currentUser);
  displayCurrentBalance(currentUser);
  displayTotalDepositWithdrawInterest(currentUser);
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//======Sort Ascending======//
sortUp.addEventListener("click", (e) => {
  e.preventDefault();
  currentUser.movements.sort((a, b) => (a > b ? -1 : 1));
  movementsAll.textContent = "";
  displayMovements(currentUser);
  displayCurrentBalance(currentUser);
  displayTotalDepositWithdrawInterest(currentUser);
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//====== Return =======//
returnSort.addEventListener("click", (e) => {
  e.preventDefault();
  movementsAll.textContent = "";
  displayMovementsReturn(currentUser);
  displayCurrentBalance(currentUser);
  displayTotalDepositWithdrawInterest(currentUser);
});
//////////////////////////////////////// //////////////////////////////////////// ////////////////////////////////////////
//======Main Date======//

date.textContent = `${today}/${theMonth}/${theYear}, ${theHour}:${theMinute}`;
