import { cp } from "fs";
import { container } from "./container";
import { Logger } from "./Logger";
import { NullWriter } from "./NullWriter";

const logger = container.get(Logger);

logger.log('Un message');
