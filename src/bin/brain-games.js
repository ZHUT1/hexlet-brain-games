#!/usr/bin/env node

import { askname, namequest, welcome } from '..';

console.log(welcome);
console.log(`Hello!, ${askname(namequest)}`);
