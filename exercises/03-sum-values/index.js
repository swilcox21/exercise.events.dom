window.calculateSumListener = function calculateSumListener() {
	//Return the value of the input #firstNumber
	var stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	var stringB = document.getElementById("secondNumber").value;
	var result = parseInt(stringA) + parseInt(stringB);
	document.querySelector("#resultNumber").value = result;
};
