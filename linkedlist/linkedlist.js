class Node {
    constructor(data, next){
        this.data = data === undefined ? 0 : data;
        this.next = null;
    }
}

function addFirst(new_node, root) {
    new_node.next = root.next;
    root.next = new_node;
}

function traverseNode(root){
    let traverse = root;
    while(traverse !== null) {
        if(typeof(traverse.data) !== "string") console.log(traverse.data);
        
        traverse = traverse.next;
    }
}

function addLast(new_node, root){
    let otherPointer = root;
    while(otherPointer.next !== null) otherPointer = otherPointer.next;
    otherPointer.next = new_node;
}

function addPosition(new_node, root, position){
    let otherPointer = root;
    while(position){
        position--;
        otherPointer = otherPointer.next;
    }
    new_node.next = otherPointer.next;
    otherPointer.next = new_node;
}

let head = new Node('head');
let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
head.next = n1;
n1.next = n2;
n2.next = n3;
let n4 = new Node(4);
let n5 = new Node(5);
addFirst(n4, head);
addPosition(n5, head, 2);
traverseNode(head);