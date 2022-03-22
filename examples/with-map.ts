import { pooledMap } from "https://deno.land/std@0.130.0/async/mod.ts";
import { tick } from "../mod.ts";

const tickEvents = pooledMap(
  1,
  tick(1_000),
  (frame) => Promise.resolve({ type: "tick", value: frame + 1 }),
);

for await (const tickEvent of tickEvents) {
  console.log(tickEvent);
}
