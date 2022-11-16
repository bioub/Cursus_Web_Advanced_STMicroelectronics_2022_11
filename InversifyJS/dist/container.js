"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
const FileWriter_1 = require("./FileWriter");
const Logger_1 = require("./Logger");
exports.container = new inversify_1.Container();
// const writer = new FileWriter('app.log');
// const logger = new Logger(writer);
// container.bind<Logger>('logger').toConstantValue(logger);
// container.bind<Logger>('logger').toDynamicValue(() => {
//   const writer = new FileWriter('app.log');
//   const logger = new Logger(writer);
//   return logger;
// });
// container.bind(Logger).toDynamicValue(() => {
//   const writer = new FileWriter('app.log');
//   const logger = new Logger(writer);
//   return logger;
// });
// container.bind(FileWriter).to(FileWriter);
// container.bind(Logger).to(Logger);
exports.container.bind(FileWriter_1.FileWriter).toSelf().inSingletonScope();
exports.container.bind(Logger_1.Logger).toSelf().inSingletonScope();
