import { setTimeout, setInterval } from 'timers/promises';

await setTimeout(1000);
console.log('1s setTimeout');

// les promesses ne fonctionnent pas pour des callback qui sont appelées plusieurs fois
// ex : setInterval, addEventListener, on, ...

// 3 manières de simplifier l'utilisation des callbacks qui sont appelées plusieurs fois :
// - Stream
// - class Observable (mais non normées, lib : RxJS)
// - async iterable (ES2018) :

for await (const _ of setInterval(1000)) {
  console.log('1s setInterval');
}
