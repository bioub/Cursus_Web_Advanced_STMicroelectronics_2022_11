export function timeoutCallback<T>(delayMs: number, val: T, callback: (val: T) => void) {
  setTimeout(() => {
    callback(val);
  }, delayMs);
}


export function timeoutPromise<T>(delayMs: number, val: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(val);
    }, delayMs);
  });
}


export class MyClass {
  public a = 'a';
  public b = 'b';

  doubleTimeout() {
    setTimeout(() => {
      this.a = 'A';
    }, Math.random() * 1000);
    setTimeout(() => {
      this.b = 'B';
    }, Math.random() * 1000);
  }
}