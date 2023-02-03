function reverse(str) {
	if (!str || str.length < 2 || typeof str !== 'string') return;

	let reverseString = '';

	for (let i = str.length - 1; i >= 0; i--) {
		reverseString += str[i];
	}

	console.log(reverseString);
}

function reverse2(str) {
	return str.split(' ').reverse().join('');
}

const reverse3 = (str) => [...str].reverse().join('');

reverse('reverse');
