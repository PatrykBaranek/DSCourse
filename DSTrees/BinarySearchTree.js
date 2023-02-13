class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) return null;
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }
  lookup(value) {
    if (!this.root) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
  }

  remove(value) {
    if (!this.root) return false;
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        if (currentNode.right === null) {
          this.root = currentNode.left;
        } else {
          if (currentNode.value < parentNode.value) {
            parentNode.left = currentNode.right;
          } else if (currentNode.value > parentNode.value) {
            parentNode.right = currentNode.right;
          }
        }
      } else if (currentNode.right.left === null) {
        currentNode.right.left = currentNode.left;
        if (currentNode.value < parentNode.value) {
          parentNode.left = currentNode.right;
        } else if (currentNode.value > parentNode.value) {
          parentNode.right = currentNode.right;
        }
      } else {
        let leftMost = currentNode.right.left;
        let leftMostParent = currentNode.right;
        while (leftMost.left !== null) {
          leftMostParent = leftMost;
          leftMost = leftMost.left;
        }
        leftMostParent.left = leftMost.right;
        leftMost.left = currentNode.left;
        leftMost.right = currentNode.right;
        if (currentNode.value < parentNode.value) {
          parentNode.left = leftMost;
        } else if (currentNode.value > parentNode.value) {
          parentNode.right = leftMost;
        }
      }
      return true;
    }
  }
}

const binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(9);
binarySearchTree.insert(4);
binarySearchTree.insert(20);
binarySearchTree.insert(1);
binarySearchTree.insert(6);
binarySearchTree.insert(15);
binarySearchTree.insert(170);
binarySearchTree.remove(170);

console.log(JSON.parse(JSON.stringify(binarySearchTree.root)));

console.log(binarySearchTree.lookup(170));
