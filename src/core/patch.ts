const dep = <T>(val: T) => {
  if (typeof val === "object" && val !== null) {
    return new Proxy(val, {
      get: (target, prop, receiver) => {
        return "test";
      },
      set: (target, prop) => {
        return true;
      },
    });
  } else {
    return val;
  }
};

const render = () => {
  return null;
};

export { dep, render };
