import { createVNode } from "./core/vNode.js";
import { dep, render } from "./core/patch.js";

const App = document.querySelector("#app");

const person = dep({
  name: "Saul",
  age: 54,
});

console.log(person.age);

const btn = createVNode({
  tag: "button",
  children: ["Add Count"],
  attr: {
    type: "button",
    click: () => {
      console.log(person.age);
      render();
    },
  },
});

const text = createVNode({
  tag: "div",
  children: [person.age],
  attr: {
    style: "color: red",
  },
});

const input = createVNode({
  tag: "input",
  attr: {
    style: "border: 1px solid black",
    input: (e: Event) => {
      // @ts-ignore
      if (e?.target?.value) console.log(e.target.value);
    },
  },
});

App?.appendChild(btn);
App?.appendChild(text);
App?.appendChild(input);
