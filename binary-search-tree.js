// Binary-Search-Tree


class Node {
    constructor(data, left = null, right = null) {
        this.data  = data;
        this.left  = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function(node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if(node.right !== null){
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }
    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }
    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }
    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null){
                return null;
            }
        }
        return current;
    }
    isPresent(data) {
        let current = this.root;
       while (current){
           if (data === current.data){
               return true;
           }
           if(data < current.data){
               current = current.left;
           } else {
               current = current.right;
           }
       }
       return false;
    }
    // recursive function that is passing node and data. Data is the data we are trying to remove.
    remove(data){
        //THIS CHECKS TO SEE IF THE TREE IS EMPTY
     const removeNode = function (node, data){
         if (node == null) {
             return null;
         }
         // checking if the node has no children
         if (data == node.data){
             if (node.left == null & node.right == null) {
                 return null;
             }
            // checking if the node has no left children
             if (node.left == null) {
                 return node.right;
             }
             // checking if the node has no right children
             if (node.right == null) {
                 return node.left;
             }
             // we are checking if the node has two children
             var tempNode = node.right;
             while (tempNode.left !== null) {
                 tempNode = tempNode.left;
             }
             node.data = tempNode.data;
             node.right = removeNode(node.right, tempNode.data);
             return node;
         } else if(dat < node.data) {
             node.left = removeNode(node.left, data);
             return node;
         } else {
             node.right = removeNode(node.right, data);
             return node;
         }
     }
     //THIS IS WHERE I CALL THE FUNCTION.
        // I'M ASSIGNING THIS.ROOT TO THE removeNode FUNCTION. INSIDE THE FUNCTION, I PASS IN THE ROOT NODE FOLLOWED BY THE DATA SEARCHED.
     this.root = removeNode(this.root, data);
    }
}





const bst = new BST();



































