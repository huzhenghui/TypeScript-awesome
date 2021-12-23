#!/usr/bin/env deno run
import * as log from "https://deno.land/std@0.118.0/log/mod.ts";

log.debug("Hello world");
log.info(123456);
log.warning(true);
log.error({ foo: "bar", fizz: "bazz" });
log.critical("500 Internal server error");