#!/usr/bin/env deno run --allow-read --allow-env
import { Command } from "https://deno.land/x/cmd/mod.ts";
const program = new Command("mycmd");
program.version("0.0.1");
program
  .option("-v, --verbose", "enable verbose mode");
program.parse(Deno.args);
