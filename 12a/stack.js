class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }




    isEmpty() {
        return this.items.length === 0;
    }


    size() {
        return this.items.length;
    }


    clear() {
        this.items = [];
    }
}

module.exports=Stack