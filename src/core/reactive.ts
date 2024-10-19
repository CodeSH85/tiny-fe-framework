
// const targetMap = new WeakMap();

// const product = {
//   price: 5,
//   quantity: 2
// }
// let total = 0;
// let effect = () => {
//   total = product.price * product.quantity
// }

// const track = (target: any, key: any) => {
//   let depsMap = targetMap.get(target);
//   if (!depsMap) {
//     targetMap.set(target, (depsMap = new Map()));
//   }
//   let dep = depsMap.get(key);
//   if (!dep) {
//     depsMap.set(key, (dep = new Set()));
//   }
//   dep.add(effect);
// };

// function trigger(target: any, key: any) {
//   const depsMap = targetMap.get(target);
//   if (!depsMap) return;
//   let dep = depsMap.get(key);
//   if (dep) {
//     dep.forEach((effect: Function) => {
//       effect();
//     });
//   }
// }

// const reactive = <T extends object>(val: T) => {
//   if (typeof val === "object" && val !== null) {
//     return new Proxy(val, {
//       get: (target: T, key: string | symbol) => {
//         track(target, key);
//         return target[key as keyof T];
//       },
//       set: (obj: T, key: string | symbol, value: any) => {
//         trigger(obj, key);
//         return true;
//       },
//     });
//   } else {
//     return val;
//   }
// };
// const productRef = reactive({
//   price: 5,
//   quantity: 2
// })
// let effect2 = () => {
//   total = productRef.price * productRef.quantity
// }

