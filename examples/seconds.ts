import { tick } from "../mod.ts";

for await (const count of tick(1_000)) {
  console.log(`${count + 1} seconds have passed`);
}
