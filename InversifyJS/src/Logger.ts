import { inject, injectable } from "inversify";
import { WriterInterface } from "./WriterInterface";

@injectable()
export class Logger {
  @inject(WriterInterface) private writer!: WriterInterface;

  // constructor(@inject(WriterInterface) private writer: WriterInterface) {}

  log(msg: string) {
    msg = `${new Date().toISOString()} - ${msg}`;
    this.writer.write(msg);
  }
}
