#!/usr/bin/env deno run --allow-read
/**
 * cat.ts
 */
import { copy } from "https://deno.land/std@0.118.0/streams/conversion.ts";
for (const filename of Deno.args) {
  const file = await Deno.open(filename);
  await copy(file, Deno.stdout);
  file.close();
}