class Counter {
    counter: number;
    constructor(counter: number) {
        this.counter = counter;
    }
    increment() {
        return this.counter  = this.counter + 1
    }
    decrement () {
        return this.counter = this.counter - 1
    }
}