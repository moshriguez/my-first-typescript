// Stacks
// LIFO - Last In First Out
// implementation via an array:
const stack: string[] = []
// adding and removing from the end of array satisfies stack rule
stack.push('google')
stack.push('instagram')
stack.push('youtube')
stack.pop()
stack.pop()
stack.pop()
// so does adding and removing from the beginning of array
stack.unshift('create new file')
stack.unshift('resized file')
stack.unshift('cloned out wrinkle')
stack.shift()
stack.shift()
stack.shift()
// however push/pop is better BigO due to the reindexing that occurs with unshift/shift
// using an array with push/pop for a stack gives the same BigO as using the below class implementation

// implementation via a singly linked list class
class ListNode {
    val: number
    next: ListNode | null
    constructor(val: number) {
        this.val = val
        this.next = null
    }
}
class Stack {
    first: ListNode | null
    last: ListNode | null
    size: number
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    // to keep BigO O(1) we are using shift and unshift logic, but calling them push and pop to keep consistant with array implementation
    push(val: number) {
        let node = new ListNode(val)
        if(!this.first) {
            this.first = node
            this.last = node
        } else {
            let after = this.first
            node.next = after
            this.first = node
        }
        return ++this.size
    }
    pop() {
        if(!this.first) return null
        let node = this.first
        if(this.size === 1) {
            this.last = null
        }
        this.first = node.next
        node.next = null
        this.size--
        return node.val
    }
}

// Queues
// FIFO - First In First Out
// implementation via an array:
// this is not ideal as there is no way around reindexing the entire array;
// whether we use push/shift or unshift/pop, we have to reindex the array, so the class implementation below is always better BigO
let q: string[] = []
q.push('first')
q.push('second')
q.push('third')
// q = ['first', 'second', 'third']
q.shift()
// q = ['second', 'third']
q.shift()
// q = ['third']
q.shift()
// q = []
q.unshift('first')
q.unshift('second')
q.unshift('third')
// q = ['third', 'second', 'first']
q.pop()
// q = ['third', 'second']
q.pop()
// q = ['third']
q.pop()

// implementation using a class:

class Queue {
    first: ListNode | null
    last: ListNode | null
    size: number
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    // enqueue is push from SLL (singly linked list)
    enqueue(val: number) {
        let newNode = new ListNode(val)
        if(!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }
    // dequeue is shift from SLL
    dequeue() {
        if(!this.first) return null
        let node = this.first
        if(this.size === 1) {
            this.last = null
        }
        this.first = node.next
        node.next = null
        this.size--
        return node.val
    }
}