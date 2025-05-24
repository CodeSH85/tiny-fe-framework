import { VNode } from "./vNode";

export function render(vNode: VNode): HTMLElement | void {
  try {
    const element = document.createElement(vNode.tag);
    if (vNode.attributes) {
      for (const [key, value] of Object.entries(vNode.attributes)) {
        if (key.startsWith('on')) {
          element.addEventListener(key.slice(2).toLowerCase(), value);
        } else {
          element.setAttribute(key, value);
        }
      }
    }
    if (vNode.children) {
      if (Array.isArray(vNode.children)) {
        vNode.children.forEach(child => {
          if (typeof child === 'string' || typeof child === 'number') {
            element.appendChild(document.createTextNode(child.toString()));
          } else if (child instanceof HTMLElement) {
            element.appendChild(child);
          }
        });
      } else {
        element.appendChild(document.createTextNode(vNode.children.toString()));
      }
    }
    return element;
  } catch (error) {
    console.error(error);
  }
}
