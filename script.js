let data_operand = document.querySelectorAll(".data-operand");
let data = document.querySelectorAll(".data");
let equal = document.querySelector("#equal");
let allButton = document.querySelector(".AC");
let delButton = document.querySelector(".DEL");
let current_operandText = document.querySelector(".current-operand");
let previous_operandText = document.querySelector(".previous-operand");
let current_operand = "";
let previous_operand = "";
let symbol = undefined;
let resultDisplayed = false;

let appendNumber = (number) => {
  if (resultDisplayed) {
    current_operand = number.toString();
    resultDisplayed = false;
  } else if (number === "." && current_operand.includes(".")) {
    return;
  } else {
    current_operand += number.toString();
  }
};

let updateDisplay = () => {
  current_operandText.innerText = current_operand;
  if (symbol != null) {
    previous_operandText.innerText = `${previous_operand} ${symbol}`;
  } else {
    previous_operandText.innerText = "";
  }
};

let result = (s) => {
  if (current_operand === "") return;
  if (previous_operand !== "") {
    cal();
  }
  symbol = s;
  previous_operand = current_operand;
  current_operand = "";
  resultDisplayed = false;
};

let cal = () => {
  let computation;
  const prev = parseFloat(previous_operand);
  const current = parseFloat(current_operand);
  if (isNaN(prev) || isNaN(current)) return;
  switch (symbol) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
    default:
      return;
  }
  current_operand = computation;
  symbol = undefined;
  previous_operand = "";
  resultDisplayed = true;
};

data.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.innerText);
    updateDisplay();
  });
});

data_operand.forEach((button) => {
  button.addEventListener("click", () => {
    result(button.innerText);
    updateDisplay();
  });
});

delButton.addEventListener("click", () => {
  del();
  updateDisplay();
});

let del = () => {
  current_operand = current_operand.toString().slice(0, -1);
};

equal.addEventListener("click", () => {
  cal();
  updateDisplay();
});

allButton.addEventListener("click", () => {
  clear();
  updateDisplay();
});

let clear = () => {
  previous_operand = "";
  current_operand = "";
  symbol = undefined;
  resultDisplayed = false;
};
