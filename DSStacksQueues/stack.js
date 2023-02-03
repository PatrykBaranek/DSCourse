class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	peek() {
		return this.top;
	}

	push(value) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.top = newNode;
			this.bottom = newNode;
		} else {
			const holdingPointer = this.top;
			this.top = newNode;
			this.top.next = holdingPointer;
		}
		this.length++;

		return this;
	}

	pop() {
		if (this.length === 0) {
			return null;
		}
		if (this.length === 1) {
			this.bottom = null;
			this.top = null;
			this.length--;
			return this;
		}

		// const holdingPointer = this.top;
		this.top = this.top.next;
		this.length--;

		return this;
	}
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('youtube');
myStack.push('discord');

myStack.pop();
myStack.pop();
myStack.pop();

const peek = myStack.peek();
// myStack.push('discord');

console.log(peek);
console.log(myStack);
