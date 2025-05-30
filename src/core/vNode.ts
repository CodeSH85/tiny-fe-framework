export type Children = unknown[] | string | number | null | undefined

export type Attributes<T> = {
  [key: string]: T
}

export type VNode<T> = {
  tag: string
  children?: Children
  attributes?: Attributes<T>
}

/**
 *
 * @param {string} tag
 * @param {Attributes} attributes
 * @param {Children} children
 * @returns
 */
export function vNode<T>(
  tag: string,
  attributes: Attributes<T>,
  children: Children
): VNode<T>
{
  return {
    tag,
    attributes,
    children
  }
}
