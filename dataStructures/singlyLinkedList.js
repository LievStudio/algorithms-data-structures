class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0
        this.tail = null;
    }
    push(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next
            this.length++;
        }
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let current = this.head;
        let nextTail = current;
        while (current.next) {
            nextTail = current;
            current = current.next;
        }
        console.log('popped val:');
        console.log(current);
        this.tail = nextTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return this;
    }

    shift() {
        if (this.length === 0) return undefined;
        let tobeShifted = this.head;
        this.head = this.head.next;
        this.length--;
        console.log('shifted val:');
        console.log(tobeShifted)
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return tobeShifted;
    }

    unshift(val) {
        let newHead = new Node(val);
        if (this.length === 0) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        console.log(list);
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        // !! turns a returned value to boolean
        if (index === this.length) return !!this.push(val);
        if (index === 0)  return !!this.unshift(val);
        let newNode = new Node(val);
        let prev = this.get(index-1);
        let temp = prev.next
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let prevNode = this.get(index-1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        // TAIL                     HEAD
        // 1,   2,   3,   4,   5,   6
        //      NODE NEXT  
        // PREV     
        
        // TAIL                          HEAD
        // 1, <- 2, <- 3, <- 4, <- 5, <- 6
        //                         PREV  NODE NEXT
        //     

        return this;
    }
}

const list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.reverse();
console.log(list);