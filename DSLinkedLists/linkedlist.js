// let myLinkedList = {
// 	head: {
// 		value: 10,
// 		next: {
// 			value: 5,
// 			next: {
// 				value: 16,
// 				next: null,
// 			},
// 		},
// 	},
// };
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		this.head = new Node(value);
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;

		return this;
	}

	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;

		return this;
	}

	printList() {
		const array = [];
		let currentNode = this.head;

		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}

		console.log(array);

		return array;
	}

	insert(index, value) {
		if (index >= this.length) return this.append(value);

		const newNode = new Node(value);
		const leader = this.traverseToIndex(index - 1);
		const holdingPointer = leader.next;
		leader.next = newNode;
		newNode.next = holdingPointer;
		this.length++;

		return this;
	}

	traverseToIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}

		return currentNode;
	}

	removeLast() {
		const leader = this.traverseToIndex(this.length - 2);
		leader.next = null;
	}

	remove(index) {
		if (index >= this.length) return this.removeLast();

		const leaderNode = this.traverseToIndex(index - 1);
		const nodeToRemove = leaderNode.next;
		leaderNode.next = nodeToRemove.next;
		this.length--;

		return this;
	}

	reverse() {
		if (!this.head.next) return this.head;

		let first = this.head;
		this.tail = this.head;
		let second = first.next;
		while (second) {
			const temp = second.next;
			second.next = first;
			first = second;
			second = temp;
		}
		this.head.next = null;
		this.head = first;

		return this;
	}
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(3, 38);
myLinkedList.remove(10);
myLinkedList.reverse();
// myLinkedList.insert(20, 88);
// myLinkedList.insert(1, 37);
// myLinkedList.insert(0, 36);

myLinkedList.printList();
