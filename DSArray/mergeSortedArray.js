// [0,3,4,4,6,30,31]
// [0, 3, 4, 31], [4, 6, 30]
//

const mergeSortedArrays = (array1, array2) => {
	const mergedArray = [];

	let i = 0;
	let j = 0;

	while (array1[i] || array2[j]) {
		if (!array2[j] || array1[i] < array2[j]) {
			mergedArray.push(array1[i]);
			i++;
		} else {
			mergedArray.push(array2[j]);
			j++;
		}
	}

	console.log(mergedArray);

	return mergedArray;
};

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
