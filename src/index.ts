import { render } from "./core/render.js";
import { useSignal } from "./core/signal.js";
import { vNode } from "./core/vNode.js";

const [ count, setCount ] = useSignal(10);

console.log(count());
let double = count() * 2;

const effect = (() => {
  console.log('change detect, ');
  console.log(`double of count is: ${double}`);
});

setCount(20);

const Counter = vNode(
  'div',
  {
    style: {
      color: '#f2f2f2'
    },
    onClick: () => {
      setCount(count() + 1);
      effect();
    }
  },
  [count()]
)

function mount() {
  const app = document.querySelector('#app');
  app?.appendChild(render(Counter)!);
}
mount();
