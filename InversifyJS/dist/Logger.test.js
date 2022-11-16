"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("./Logger");
const NullWriter_1 = require("./NullWriter");
const writer = new NullWriter_1.NullWriter();
const logger = new Logger_1.Logger(writer);
logger.log('Un message');
