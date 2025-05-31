import { isFunction } from 'src/utils/helpers'
import type { VNode } from './vNode'

export function render<T>(vNode: VNode<T>): HTMLElement | void {
  const element = document.createElement(vNode.tag)
  if (!element) {
    console.error(`Failed to create element for tag: ${vNode.tag}`)
    return
  }

  if (vNode.attributes) {
    for (const [key, value] of Object.entries(vNode.attributes)) {
      if (key.startsWith('on') && isFunction(value)) {
        element.addEventListener(key.slice(2).toLowerCase(), value)
      } else if (key === 'style' && typeof value === 'object') {
        for (const [styleKey, styleValue] of Object.entries(value)) {
          element.style[styleKey] = styleValue
        }
      } else {
        element.setAttribute(key, value)
      }
    }
  }
  if (vNode.children) {
    if (Array.isArray(vNode.children)) {
      vNode.children.forEach((child) => {
        if (typeof child === 'string' || typeof child === 'number') {
          element.appendChild(document.createTextNode(child.toString()))
        } else if (child instanceof HTMLElement) {
          element.appendChild(child)
        }
      })
    } else {
      element.appendChild(document.createTextNode(vNode.children.toString()))
    }
  }
  return element
}
