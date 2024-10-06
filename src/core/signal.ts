let current: any;

function signal<T>(initValue: T): [() => T, (value: T) => void] {
  let value = initValue;
  const subscribers: any = [];
  function get() {
    subscribers.push(current);
    return value;
  }
  function set(newValue: T) {
    value = newValue;
    subscribers.forEach((sub: any) => sub());
  }
  return [get, set];
}

export function effect(fn: Function) {
  current = fn;
  fn();
  current = null;
}

const [count, setCount] = signal(10);
effect(() => {
  console.log('changed');
  console.log(count());
});
setCount(100);
