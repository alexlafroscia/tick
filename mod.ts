import { delay } from "https://deno.land/std@0.130.0/async/mod.ts";

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
    await delay(interval);

    yield iterations++;
  }
}
