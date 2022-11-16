class Stack<T = string> {
  private values: T[] = [];

  pop(): T | undefined {
    return this.values.pop();
  }
  peek(): T | undefined {
    return this.values.at(-1);
  }
  push(val: T) {
    this.values.push(val);
  }
}

const stringStack = new Stack();
stringStack.push('A');
stringStack.push('B');
stringStack.push('C');

console.log(stringStack.peek()); // C
console.log(stringStack.pop()); // C
console.log(stringStack.peek()); // B

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);

console.log(numberStack.peek()); // 3
console.log(numberStack.pop()); // 3
console.log(numberStack.peek()); // 2
