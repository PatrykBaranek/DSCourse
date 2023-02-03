// const nemo = ['nemo'];
// const everyone = [
// 	'dory',
// 	'bruce',
// 	'marlin',
// 	'gill',
// 	'bloat',
// 	'nigel',
// 	'squirt',
// 	'darla',
// 	'hank',
// 	'nemo',
// ];
// const large = new Array(1000).fill('nemo');

// function findNemo(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		console.log('running');
// 		if (array[i] === 'nemo') {
// 			console.log('Found NEMO!');
// 			break;
// 		}
// 	}
// }

// findNemo(everyone); // O(n) --> Linear

// const boxes = [0, 1, 2, 3, 4, 5];

// function logFirstTwoBoxes(boxes) {
// 	console.log(boxes[0]); // O(1)
// 	console.log(boxes[1]); // O(1)
// }

// logFirstTwoBoxes(boxes); // O(2) --> Constant Time

// function anotherFunChallenge(input) {
// 	let a = 5; // O(1)
// 	let b = 10; // O(1)
// 	let c = 50; // O(1)
// 	for (let i = 0; i < input; i++) {
// 		// O(n)
// 		let x = i + 1; // O(n)
// 		let y = i + 2; // O(n)
// 		let z = i + 3; // O(n)
// 	}

// 	for (let j = 0; j < input; j++) {
// 		// O(n)
// 		let p = j * 2; // O(n)
// 		let q = j * 2; // O(n)
// 	}
// 	let whoAmI = "I don't know"; // O(1)
// }

// O(4 + 7n) --> O(n)

// const boxes = [1, 2, 3, 4, 5];

// function logAllPairsOfArray(boxes) {
// 	for (let i = 0; i < boxes.length; i++) {
// 		for (let j = 0; j < boxes.length; j++) {
// 			console.log(boxes[i], boxes[j]);
// 		}
// 	}
// }

// function printAllNumbersThenAllPairSums(numbers) {
// 	console.log('these are the numbers:');
// 	numbers.forEach((n) => console.log(n));

// 	console.log('and these are their sums:');
// 	numbers.forEach((firstNumber) => {
// 		numbers.forEach((secondNumber) => {
// 			console.log(firstNumber + secondNumber);
// 		});
// 	});
// }

// // logAllPairsOfArray(boxes); // O(n * n)
// printAllNumbersThenAllPairSums(boxes);

// function boooo(n) {
// 	for (let i = 0; i < n.length; i++) {
// 		console.log('boooooo');
// 	}
// }

// boooo([1, 2, 3, 4, 5]); // Space complexity  O(1)

// function arrayOfHiNTimes(n) {
// 	let hiArray = [];

// 	for (let i = 0; i < n; i++) {
// 		hiArray[i] = 'hi';
// 	}

// 	return hiArray;
// }

// console.log(arrayOfHiNTimes(6)); // Space complexity  O(n)
'edasdasda'.length; // Space complexity  O(1)

const findNemo2 = (array) => {
	array.forEach((fish) => {
		if (i === 'nemo') {
			console.log('Found NEMO!');
		}
	});
};

const findNemo3 = (array) => {
	for (const fish of array) {
		if (fish === 'nemo') {
			console.log('Found NEMO!');
		}
	}
};
