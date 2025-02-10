export function waitElement<T extends Element>(selector: string): Promise<T> {
  return new Promise((resolve, _reject) => {
    setInterval(() => {
      const el = document.querySelector(selector);

      if (el) {
        clearInterval(1);
        resolve(el as T);
      }
    }, 10);
  });
}
