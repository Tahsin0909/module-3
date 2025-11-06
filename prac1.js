class Counter {
    constructor(count){
        this.count = count
    }
    add(amount){
        this.count = this.count + amount
    }
    print(){
        console.log(this.count)
        return this.count
    }
}

const counter1  = new Counter(2)
counter1.add(2)
counter1.print()
// console.log(counter1.print())

console.log(console)