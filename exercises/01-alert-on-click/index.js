window.myClickFunction = function myClickFunction() {
	alert("Your first function!");
};

window.myClickFunction2 = function myClickFunction2(ele) {
	console.log(ele);
	ele.innerHTML = "you clicked me!";
	alert("Your second function!");
};
