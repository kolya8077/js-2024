const resultEl = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiplyBtn = document.getElementById("multiply");
const dividingBtn = document.getElementById("dividing");
let action = "+";

plusBtn.onclick = () => {
  action = "+";
};

minusBtn.onclick = () => {
  action = "-";
};

multiplyBtn.onclick = () => {
  action = "*";
};

dividingBtn.onclick = () => {
  action = "/";
};

const printResult = (sum) => {
  if (sum > 0) {
    resultEl.style.color = "green";
  } else {
    resultEl.style.color = "red";
  }

  resultEl.textContent = sum;
};

const computeNumbersWithAction = (inp1, inp2, actionSumbol) => {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);

  // return actionSumbol == "+" ? num1 + num2 : num1 - num2;

  if (actionSumbol == "+") {
    return num1 + num2;
  } else if (actionSumbol == "-") {
    return num1 - num2;
  } else if (actionSumbol == "*") {
    return num1 * num2;
  } else if (actionSumbol == "/") {
    return num1 / num2;
  }
};

submitBtn.onclick = () => {
  const res = computeNumbersWithAction(input1, input2, action);
  printResult(res);
};
