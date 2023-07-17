let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amountField");
let currencyElement = document.querySelector(".js-currencyField");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.5;
let rateUSD = 4.1;
let rateGBP = 5.2;


formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = +amountElement.value;
  let currency = currencyElement.value;

  let result;

  switch (currency) {
    case "EUR":
      result = amount / rateEUR;
      break;
    case "USD":
      result = amount / rateUSD;
      break;
    case "GBP":
      result = amount / rateGBP;
      break;
  }

  resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
});
