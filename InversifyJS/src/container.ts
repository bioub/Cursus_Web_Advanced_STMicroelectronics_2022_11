import 'reflect-metadata';

import { Container } from 'inversify'
import { FileWriter } from './FileWriter';
import { Logger } from './Logger';
import { WriterInterface } from './WriterInterface';

export const container = new Container();

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

// container.bind(FileWriter).toSelf().inSingletonScope();

container.bind(FileWriter).toDynamicValue(() => {
  return new FileWriter('tmp.log');
}).inSingletonScope();

container.bind(Logger).toSelf().inSingletonScope();
container.bind(WriterInterface).toService(FileWriter);
