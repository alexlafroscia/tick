# `tick`

Produces a value on the given interval

```ts
import { tick } from "https://deno.land/x/tick/mod.ts";

for await (const count of tick(1_000)) {
  console.log(`${count + 1} seconds have passed`);
}
```
