// reference type
const object1 = { value: 10 };
const object2 = object1;
const object3 = { value: 10 };

object1.value = 15;
console.log(object2.value);

// context vs scope
function context() {
	console.log(this);
}

const object4 = {
	a: function () {
		console.log(this);
	},
};

object4.a();

// instantiation
class Player {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}

	itroduce() {
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type);
	}
	play() {
		console.log(`WEEEE I'm a ${this.type}`);
	}
}

const player = new Player('John', 'Warrior');
const wizard = new Wizard('John', 'Warrior');

wizard.play();
