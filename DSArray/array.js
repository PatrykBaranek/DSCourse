// const strings = ['a', 'b', 'c', 'd'];
// //4*4 = 16 bytes of storage

// strings[2];

// //push
// strings.push('e'); //O(1)

// //pop
// strings.pop(); //O(1)

// //unshift
// strings.unshift('x', 'y');

// //splice
// strings.splice(2, 0, 'alien');

// console.log(strings);
class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index];
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;

		return this.length;
	}

	pop() {
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return lastItem;
	}

	delete(index) {
		const item = this.data[index];
		this.#shiftItems(index);
		return item;
	}

	#shiftItems(index) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;
	}
}

const array = new MyArray();

array.push(2);
array.push('hi');
array.push('you');
array.push('!');
array.delete(0);
array.push('are');
array.push('nice');
array.delete(1);

console.log(array);
