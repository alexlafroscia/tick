import { assertEquals } from "https://deno.land/std@0.130.0/testing/asserts.ts";
import { tick, wait } from "./mod.ts";

Deno.test("tick", async function () {
  const iterable = tick(10);
  const firstResult = iterable.next();

  const beforeFirstIteration = await Promise.race([
    firstResult,
    Promise.resolve("This will win"),
  ]);

  assertEquals(beforeFirstIteration, "This will win");

  const afterFirstIteration = await Promise.race([
    firstResult,
    wait(11),
  ]);

  assertEquals(afterFirstIteration, { done: false, value: 0 });

  assertEquals(await iterable.next(), { done: false, value: 1 });
  assertEquals(await iterable.next(), { done: false, value: 2 });
});
