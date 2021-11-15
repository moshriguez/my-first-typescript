// Binary Heaps
// very similar to binary search tree
// each parent has at most 2 child nodes
// all children of each node are as full as they can be and left children are filled out first
// no implied ordering between children
// Max Binary Heap - parent nodes are always LARGER than child nodes
// Min Binary Heap - parent nodes are always SMALLER than child nodes

class MaxBinaryHeap {
    values: number[]
    constructor() {
        this.values = []
    }
    insert(val: number) {
        this.values.push(val)
        this.bubbleUp()
    }
    bubbleUp() {
        let idx = this.values.length - 1
        while(idx > 0) {
            let parentIdx = Math.floor((idx-1)/2)
            if(this.values[idx] <= this.values[parentIdx]) break;
            this.swap(idx, parentIdx)
            idx = parentIdx
        }
    }
    swap(i1, i2) {
        [this.values[i1], this.values[i2]] = [this.values[i2], this.values[i1]]
    }
    extractMax() {
        if(!this.values.length) return undefined
        this.swap(0, this.values.length-1)
        const max = this.values.pop()
        this.trickleDown()
        return max
    }
    trickleDown() {
        let idx = 0, leftIdx = 1, rightIdx = 2
        // Math.max returns NaN if one of the args is undefined
        let max = Math.max(this.values[leftIdx], this.values[rightIdx] || -Infinity)
        // if the parent is greater than both children or has no children, were done
        while(this.values[idx] < max) {
            let child = this.values[leftIdx] === max ? leftIdx : rightIdx
            this.swap(idx, child)
            idx = child
            leftIdx = 2*idx + 1
            rightIdx = 2*idx + 2
            max = Math.max(this.values[leftIdx], this.values[rightIdx] || -Infinity)
        }
    }
    // instructor's code - can replace trickleDown with sinkDown
    sinkDown() {
        let idx = 0
        const length = this.values.length
        const element = this.values[0]
        while(true) {
            let leftIdx = 2*idx + 1
            let rightIdx = 2*idx + 2
            let leftChild, rightChild
            let swap = null
            if (leftIdx < length) {
                leftChild = this.values[leftIdx]
                if(leftChild > element) {
                    swap = leftIdx
                }
            }
            if (rightIdx < length) {
                rightChild = this.values[rightIdx]
                if(
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                 ) {
                    swap = rightIdx
                }
            }
            if(!swap) break
            this.swap(idx, swap)
            idx = swap
        }
    }
}

let heap = new MaxBinaryHeap
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)

class myNode {
    val: number
    priority: number
    constructor(val: number, priority: number) {
        this.val = val
        this.priority = priority
    } 
}

class PriorityQueue {
    values: myNode[]
    constructor() {
        this.values = []
    }
    enqueue(val: number, priority: number) {
        const newNode = new myNode(val, priority)
        this.values.push(newNode)
        this.bubbleUp()
    }
    bubbleUp() {
        let idx = this.values.length - 1
        while(idx > 0) {
            let parentIdx = Math.floor((idx-1)/2)
            if(this.values[idx].priority >= this.values[parentIdx].priority) break;
            this.swap(idx, parentIdx)
            idx = parentIdx
        }
    }
    swap(i1, i2) {
        [this.values[i1], this.values[i2]] = [this.values[i2], this.values[i1]]
    }
    dequeue() {
        if(!this.values.length) return undefined
        this.swap(0, this.values.length-1)
        const min = this.values.pop()
        this.trickleDown()
        return min.val
    }
    trickleDown() {
        let idx = 0, leftIdx = 1, rightIdx = 2, min
        if(!this.values[leftIdx]) return
        else if(!this.values[rightIdx]) min = this.values[leftIdx].priority
        else {
            min = Math.min(this.values[leftIdx].priority, this.values[rightIdx].priority)
        }
        while(this.values[idx].priority > min) {
            let child = this.values[leftIdx].priority === min ? leftIdx : rightIdx
            this.swap(idx, child)
            idx = child
            leftIdx = 2*idx + 1
            rightIdx = 2*idx + 2
            if(!this.values[leftIdx]) return
            else if(!this.values[rightIdx]) min = this.values[leftIdx].priority
            else {
                min = Math.min(this.values[leftIdx].priority, this.values[rightIdx].priority)
            }
        }
    }
}

let pq = new PriorityQueue
pq.enqueue(41, 1)
pq.enqueue(39, 2)
pq.enqueue(33, 3)
pq.enqueue(18, 5)
pq.enqueue(27, 4)
pq.enqueue(12, 0)
pq.enqueue(55, 7)
