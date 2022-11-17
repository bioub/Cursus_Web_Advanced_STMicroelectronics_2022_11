import { injectable } from "inversify";
import { WriterInterface } from "./WriterInterface";

@injectable()
export class NullWriter implements WriterInterface {
  async write(msg: string): Promise<void> {

  }
}
