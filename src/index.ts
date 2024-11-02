import { useSignal } from "./core/signal.js";
import { createVNode, VNode } from "./core/vNode.js";

let context = null;
const [ count, setCount ] = useSignal(10);

console.log(count());
let double = count() * 2;
const effect = (() => {
  console.log('change detect, ');
  console.log(`double of count is: ${double}`);
});
effect();

setCount(20);

const Counter = createVNode({
  tag: 'div',
  children: ['Hello'],
  attr: {
    style: {
      color: 'red'
    }
  }
})

document.body.appendChild(Counter)
