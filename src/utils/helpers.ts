export function isObject<T>(target: T): boolean {
  return typeof target === 'object' && !Array.isArray(target) && target !== null
}

export function isArray<T>(target: T): boolean {
  return Array.isArray(target)
}

export function isString<T>(target: T): boolean {
  return typeof target === 'string'
}

export function isNumber<T>(target: T): boolean {
  return typeof target === 'number'
}

export function isFunction<T>(target: T): boolean {
  return typeof target === 'function'
}

export function hasProp<T>(target: T, key: string | number | symbol): boolean {
  if (!isObject(target)) throw new Error('Value is not an object')
  return Object.hasOwnProperty.call(target, key)
}
