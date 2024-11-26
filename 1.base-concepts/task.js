"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = Math.pow(b, 2) - 4 * a * c;
	if (discriminant > 0) {
		arr.push((- b + Math.sqrt(discriminant)) / (2 * a));
		arr.push((- b - Math.sqrt(discriminant)) / (2 * a));
	} else if (discriminant === 0) {
		arr.push(- b / (2 * a));
	} else {
		arr.length = 0;
	}
	return arr;
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = percent / 100;
	let loanBody = amount - contribution;
	let P = 1 / 12 * percent;
	let monthlyPayment = loanBody * (P + (P / (((1 + P) ** countMonths) - 1)));
	let totalAmount = (monthlyPayment * countMonths).toFixed(2);
	return parseFloat(totalAmount);
}