import { container } from "./container";
import { FileWriter } from "./FileWriter";
import { Logger } from "./Logger";



const logger1 = container.get(Logger);
logger1.log('Un message');


const logger2 = container.get(Logger);

console.log(logger1 === logger2);

