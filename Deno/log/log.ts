#!/usr/bin/env deno run --allow-read --allow-write
import { Logger } from 'https://deno.land/x/log/mod.ts'
export const logger = await Logger.getInstance() // import this one in your sub modules

logger.debug('example debug message')
logger.info('example info')
logger.warning('example warning')
logger.error('example error message')
logger.critical('example critical message')


// warnings + errors are additionally written to ./warnings-errors.txt file 