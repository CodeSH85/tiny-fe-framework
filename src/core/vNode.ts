import { isObject } from "../utils/helpers.js";

type Children = (HTMLElement | string | number)[];

type VNode = {
  tag: string;
  children?: Children;
  attr?: object;
};

const isValidEvent = (eventName: string) => {
  return `on${eventName}` in document.createElement("div");
};

const createVNode = ({ tag, children, attr }: VNode) => {
  if (typeof tag !== "string") throw new Error("Invalid tag.");
  const root = document.createElement(tag);
  if (children?.length) {
    for (const child of children) {
      if (typeof child === "string" || typeof child === "number") {
        root.innerHTML = children.toString();
      } else if (child instanceof HTMLElement) {
        root.appendChild(child);
      }
    }
  }
  if (attr) {
    Object.entries(attr).forEach(([key, value]) => {
      if (typeof value === "function" && isValidEvent(key)) {
        root.addEventListener(key, value);
      } else if (isObject(value)) {
        if (key === 'style') {
          Object.entries(value).forEach(([_key, _value]) => {
            root.setAttribute('style', `${_key}: ${_value}`);
          })
        } else {
          Object.entries(value).forEach(([_key, _value]) => {
            root.setAttribute(_key, _value);
          })
        }
      } else {
        root.setAttribute(key, value);
      }
    });
  }
  return root;
};

export { createVNode };
export type { VNode };
