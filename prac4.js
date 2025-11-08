class Node {
    constructor(value){
this.value = value
this.next = null
    }
}


class LinkedList {
    constructor(){
        this.head = null;
        this.tail =  null;
        this.length = 0;
    }

    append(value){

        const newNode = new Node(value)
        //if the linked list ois empty
       if(this.head === null){
          this.head = newNode
          this.tail = newNode
       }
       else{
    // if the LinkedList is not empty 
    this.tail.next = newNode;
    this.tail = newNode;
    }
    this.length++;
    }

    prepend(){

    }

    insert(){

    }

    remove(){

    }

    print(){
let currentNode = this.head
console.log(currentNode)
while(currentNode !== null){
    console.log(currentNode.value)
}
    }
}


const linkedList = new LinkedList()
linkedList.append(1)
linkedList.append(2)
linkedList.append(3)


linkedList.print()

