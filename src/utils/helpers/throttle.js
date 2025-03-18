export function throttle(fn, interval) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last > interval) {
      fn.apply(this, args);
      last = now;
    }
  };
}
