"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const container_1 = require("./container");
const Logger_1 = require("./Logger");
// const writer = new FileWriter('app.log');
// const logger = new Logger(writer);
const logger1 = container_1.container.get(Logger_1.Logger);
logger1.log('Un message');
const logger2 = container_1.container.get(Logger_1.Logger);
console.log(logger1 === logger2);
