import { useSignal } from "./core/signal.js";

const [ count, setCount ] = useSignal(10);

console.log(count());
let double = count() * 2;
const effect = (() => {
  console.log('change detect, ');
  console.log(`double of count is: ${double}`);
});
effect();

setCount(20);