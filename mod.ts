/**
 * Create a `Promise` that resolves after the amount of time has passed
 *
 * @param timeout The amount of time to wait before resolving
 */
export function wait(timeout: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}

/**
 * Yields a value^ after the given timeout
 *
 * ^The yielded value is the number of iterations so far
 *
 * @param interval The frequency with which to produce a value
 */
export async function* tick(interval: number) {
  let iterations = 0;

  while (true) {
    await wait(interval);

    yield iterations++;
  }
}
