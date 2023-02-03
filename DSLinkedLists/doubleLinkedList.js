class DoubleNode {
	constructor(data) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}

class DoubleLinkedList {
	constructor(value) {
		this.head = new DoubleNode(value);
		this.tail = this.head;
		this.length = 1;
	}

	prepend(value) {
		const newNode = new DoubleNode(value);
		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;
		this.length++;
	}

	append(value) {
		const newNode = new DoubleNode(value);
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;

		return this;
	}

	printList() {
		const array = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			array.push(currentNode.data);
			currentNode = currentNode.next;
		}
		console.log(array);
	}

	insert(index, value) {
		if (index >= this.length) return this.append(value);

		const newNode = new DoubleNode(value);
		const leader = this.findLeader(index - 1);
		const follower = leader.next;
		leader.next = newNode;
		newNode.prev = leader;
		newNode.next = follower;
		follower.prev = newNode;
		this.length++;

		return this;
	}

	remove(index) {
		if (index >= this.length || index < 1)
			return console.log('Index out of range');

		const leader = this.findLeader(index - 1);
		const nodeToRemove = leader.next;
		const follower = nodeToRemove.next;
		leader.next = follower;
		follower.prev = leader;
		this.length--;

		return this;
	}

	findLeader(index) {
		let counter = 0;
		let currentNode = this.head;

		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}

		return currentNode;
	}
}

const dbLinkedList = new DoubleLinkedList(10);

dbLinkedList.append(5);
dbLinkedList.append(16);
dbLinkedList.prepend(1);

dbLinkedList.insert(2, 99);
dbLinkedList.remove(1);

dbLinkedList.printList();
