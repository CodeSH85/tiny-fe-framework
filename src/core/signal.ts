const context = () => {}

function useSignal<T>(initValue: T): [() => T, (value: T) => void] {
  let value = initValue
  const subscribers: Set<() => void> = new Set()

  function get() {
    subscribers.add(context)
    return value
  }
  function set(newValue: T) {
    value = newValue
    subscribers.forEach((sub) => {
      if (sub && typeof sub === 'function') sub()
    })
  }
  return [get, set]
}

export { useSignal }
