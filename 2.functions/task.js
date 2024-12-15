function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
	  let element = arr[i];
	  if (element > max) {
		element === max;
	  }
	  if (element < min) {
		element === min;
	  }
	  sum += element;
	}
	let avg = (sum / arr.length).toFixed(2);
	return {
	  min: min,
	  max: max,
	  avg: Number(avg)
	};
  }
  
  
  function summElementsWorker(...arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
	  let element = arr[i];
	  sum += element;
	}
	if (arr.length === 0) {
	  return 0;
	}
	return (sum);
  }
  
  function differenceMaxMinWorker(...arr) {
	let max = Math.max(arr);
	let min = Math.min(arr);
	if (arr.length === 0) {
	  return 0;
	}
	return (max - min);
  }
  
  function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
	  let element = arr[i];
	  if (arr.length === 0) {
		return 0;
	  }
	  if (element % 2 === 0) {
		sumEvenElement += element;
	  } else {
		sumOddElement += element;
	  }
	}
	return (sumEvenElement - sumOddElement);
  }
  
  function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
	  let element = arr[i];
	  if (arr.length === 0) {
		return 0;
		  }
	  if (element % 2 === 0) {
		sumEvenElement += element;
		countEvenElement += 1;
	}
	return (sumEvenElement / arr.length);
  }
  }
  
  function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
	  const arr = func(...arrOfArr[i])
	}
	if (arr > maxWorkerResult) {
	  maxWorkerResult = arr;
	}
	return maxWorkerResult;
  }
