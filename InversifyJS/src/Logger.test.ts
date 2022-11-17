import { container } from "./container";
import { Logger } from "./Logger";
import { NullWriter } from "./NullWriter";
import { WriterInterface } from "./WriterInterface";

container.rebind(WriterInterface).to(NullWriter);

const logger = container.get(Logger);

logger.log('Un message');
