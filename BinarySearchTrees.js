// Binary Search Tree
// Every parent node has at most 2 children
// Every node to the left of a parent is ALWAYS LESS THAN the parent
// Every node to the right of a parent is ALWAYS GREATER THAN the parent
var Point = /** @class */ (function () {
    function Point(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
    return Point;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.insert = function (val) {
        var newNode = new Point(val);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            var current = this.root;
            while (current.val !== val) {
                if (current.val === val)
                    return undefined;
                if (val > current.val) {
                    if (current.right) {
                        current = current.right;
                    }
                    else {
                        current.right = newNode;
                        current = current.right;
                    }
                }
                else {
                    if (current.left) {
                        current = current.left;
                    }
                    else {
                        current.left = newNode;
                        current = current.left;
                    }
                }
            }
        }
        return this;
    };
    BinarySearchTree.prototype.find = function (val) {
        if (!this.root)
            return false;
        var current = this.root;
        var found = false;
        while (current && !found) {
            if (current.val === val)
                return current;
            else {
                if (val > current.val)
                    current = current.right;
                else
                    current = current.left;
            }
        }
        return found;
    };
    // breadth first search
    BinarySearchTree.prototype.bfs = function () {
        var q = [];
        var visited = [];
        if (!this.root)
            return visited;
        var current;
        q.push(this.root);
        while (q.length) {
            current = q.shift();
            visited.push(current.val);
            if (current.left)
                q.push(current.left);
            if (current.right)
                q.push(current.right);
        }
        return visited;
    };
    // depth first search - pre order
    BinarySearchTree.prototype.dfsPreO = function () {
        var visited = [];
        var current = this.root;
        if (!current)
            return visited;
        function traverse(node) {
            visited.push(node.val);
            if (node.left)
                traverse(node.left);
            if (node.right)
                traverse(node.right);
        }
        traverse(current);
        return visited;
    };
    // depth first search - post order
    BinarySearchTree.prototype.dfsPostO = function () {
        var visited = [];
        var current = this.root;
        if (!current)
            return visited;
        function traverse(node) {
            if (node.left)
                traverse(node.left);
            if (node.right)
                traverse(node.right);
            visited.push(node.val);
        }
        traverse(current);
        return visited;
    };
    // depth first search - in order
    BinarySearchTree.prototype.dfsInO = function () {
        var visited = [];
        var current = this.root;
        if (!current)
            return visited;
        function traverse(node) {
            node.left && traverse(node.left);
            visited.push(node.val);
            node.right && traverse(node.right);
        }
        traverse(current);
        return visited;
    };
    return BinarySearchTree;
}());
//      10
//   5     13
// 2  7  11  16
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
var noTree = new BinarySearchTree();
