const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function userInputNumber() {
	return parseInt(userInput.value);
}

function outputLogs(operator, resultBefore, resultAfter) {
	const description = `${resultBefore} ${operator} ${resultAfter}`;
	outputResult(currentResult, description);
}

function logData(operation, resultBefore, userInput, resultAfter) {
	const logEntry = {
		operation: operation,
		resultBefore: resultBefore,
		userInput: userInput,
		resultAfter: resultAfter,
	};
	logEntries.push(logEntry);
	console.log(logEntries);
}

function calculateResult(calculationType) {
	const enteredNumber = userInputNumber();
	const initialNumber = currentResult;
	let mathOperator;
	if (calculationType === "ADD") {
		currentResult += enteredNumber;
		mathOperator = "+";
	} else if (calculationType === "SUBTRACT") {
		currentResult -= enteredNumber;
		mathOperator = "-";
	} else if (calculationType === "MULTIPLY") {
		currentResult *= enteredNumber;
		mathOperator = "*";
	} else if (calculationType === "DIVIDE") {
		currentResult /= enteredNumber;
		mathOperator = "/";
	}

	outputLogs(mathOperator, initialNumber, enteredNumber);
	logData(calculationType, initialNumber, enteredNumber, currentResult);
}

function add() {
	calculateResult("ADD");
}

function subtract() {
	calculateResult("SUBTRACT");
}

function multiply() {
	calculateResult("MULTIPLY");
}

function divide() {
	calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
