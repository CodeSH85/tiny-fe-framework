export type Children = any[] | string | number | null | undefined

export type Attributes = Record<string, any>

export type VNode = {
  tag: string
  children?: Children
  attributes?: Attributes
}

/**
 *
 * @param {string} tag
 * @param {Attributes} attributes
 * @param {Children} children
 * @returns
 */
export function vNode(
  tag: string,
  attributes: Attributes,
  children: Children
): VNode
{
  return {
    tag,
    attributes,
    children
  }
}

export function render(vNode: VNode): HTMLElement | void {
  try {
    const element = document.createElement(vNode.tag)
    return element
  } catch (error) {
    console.error(error)
  }
}
