class Stack {
    constructor(){
        this.items  = [];
    }
    push(value){
        this.items.push(value)
    }
    peek(){
if(!this.isEmpty){
    return undefined
}
return this.items[this.items.length-1]
    }
    pop(){
        if(!this.isEmpty){
            return undefined
        }
        return this.items.pop()
    }

    isEmpty(){
        return this.items.length === 0
    }
    print(){
        console.log(this.items)
    }
}

const stack = new Stack()
stack.push(20)
stack.push(30)
console.log(stack.peek())
console.log(stack.pop())
stack.print()
