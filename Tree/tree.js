class Node{
    constructor(data, left, right){
        this.data = data;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

//Initializing nodes
let n1 = new Node(1),
    n2 = new Node(3),
    n3 = new Node(4),
    n4 = new Node(5),
    n5 = new Node(6),
    n6 = new Node(8)

// link reference between nodes
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;

/* insert and removing nodes */
let P = new Node(9);

//insert p bettwen n1 and n2
n1.left = P;
P.left = n2;

// remove node P
n1.left = n2;

//lever order traversal time complex is O(n) each node visit once
const levelOrder = (root) => {
    const queue = [root];
    const list = [];
    while(queue.length) {

        //take first element from queue
        let node = queue.shift(); //dequeue

        list.push(node.data);
        if (node.left) queue.push(node.left) // left child node enqueue
        if (node.right) queue.push(node.right) // right child node enqueue
    }
    return list;
}

// Pre order about visit left subtree
let list = [];
//recursive
const preOrder = (root) => {
    if(root === null) return;
    // root -> left -> right
    list.push(root.data);
    preOrder(root.left);
    preOrder(root.right);

}

// iteration
const preOrderIteration = (root) => {
    let list = [];
    const stack = [root];
    // root -> left -> right
    while(stack.length){
        let current = stack.pop();
        list.push(current.data);

        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);
    }

    return list;
}



// In order about visit left -> root -> right -> ...

//Recursive
const inOrder = (root) => {
    if(root === null) return;
    // left -> root -> right
    inOrder(root.left);
    list.push(root.data);
    inOrder(root.right);
}

//Iteration
const inOrderIteration = (root) => {
    if(root === null) return;

    let list = [];
    const stack = [];
    let current = root;

    while(current !== null || stack.length){

        while(current !== null){
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();
        list.push(current.data);

        current = current.right;
    }

    return list;
}


// Post order about left -> right -> root

//recursive
const postOrder = (root) => {
    if(root === null) return;
    //left -> right -> root;
    postOrder(root.left);
    postOrder(root.right);
    list.push(root.data);
}

