class Stack {
	constructor() {
		this.array = [];
	}

	peek() {
		return this.array[this.array.length - 1];
	}

	pop() {
		this.array.pop();
		return this;
	}

	push(value) {
		this.array.push(value);
		return this;
	}
}

const stackArray = new Stack();
stackArray.push('google');
stackArray.push('udemy');
stackArray.push('youtube');

stackArray.pop();
const peek = stackArray.peek();

console.log(peek);
console.log(stackArray);
