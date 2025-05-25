export type Children = unknown[] | string | number | null | undefined

export type Attributes = Record<string, unknown>

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
