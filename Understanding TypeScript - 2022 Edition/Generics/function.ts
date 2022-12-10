function merge(a: object, b: object) {
  return Object.assign(a, b);
}

merge({ b: "a" }, { a: 3 });
