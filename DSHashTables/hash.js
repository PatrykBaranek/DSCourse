// let user = {
// 	age: 54,
// 	name: 'Kylie',
// 	magic: true,
// 	scream: function () {
// 		console.log('ahhhh!');
// 	},
// };

// user.age;
// user.spell = 'abra kadabra';
// user.scream();

// const map = new Map();
// const sets = new Set();

function arrayRepeat(arr) {
	let map = new Map();

	for (i = 0; i < arr.length; i++) {
		if (map.has(arr[i])) {
			return arr[i];
		}
		map.set(arr[i], i);
	}
}

console.log(arrayRepeat([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(arrayRepeat([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(arrayRepeat([2, 3, 4, 5]));
