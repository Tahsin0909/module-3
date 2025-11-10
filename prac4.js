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
       if(this.head == null){
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

    prepend(value){

        const newNode = new Node(value)
        //if the linked list ois empty
       if(this.head == null){
        this.head = newNode
        this.tail = newNode;
       }
       else{
    // if the LinkedList is not empty 
        newNode.next = this.head
        this.head = newNode

    }
    this.length++;
    }

    insert(index, value){
    if(index < 0 || index > this.length){
return undefined
    }
    if(index === 0){
        return this.prepend(value)
    } 
    if(index === this.length){
        return this.append(value)
    }
    else{
        const newNode = new Node(value)
        let count = 0;
        let leadingNode = this.head
  
        while(count !== index- 1){
            leadingNode = leadingNode.next
            count++
        }
      const holdingNode = leadingNode.next
      newNode.next = holdingNode
      leadingNode.next = newNode

    }
    }

    remove(index){

        let count = 0;
        let leadingNode = this.head
  
        while(count !== index- 1){
            leadingNode = leadingNode.next
            count++
        }
        const nodeToRemove = leadingNode.next 
        console.log(leadingNode)
        console.log("nodeToRemove",nodeToRemove)
        console.log(leadingNode.value)
        console.log(this.head)
        console.log(this.tail)

    }

    print(){
        const arr = []
let currentNode = this.head
while(currentNode !== null){
arr.push(currentNode.value)
    currentNode = currentNode.next
}
console.log(arr.join("->"))
    }
}


const linkedList = new LinkedList()
linkedList.append(1)
linkedList.append(2)
linkedList.append(3)

linkedList.prepend(10)
linkedList.prepend(30)
linkedList.prepend(40)

linkedList.insert(2, 20)
linkedList.remove(4)
linkedList.print()

