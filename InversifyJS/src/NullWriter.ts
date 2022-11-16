import { WriterInterface } from "./WriterInterface";

export class NullWriter implements WriterInterface {
  async write(msg: string): Promise<void> {
    
  }
}
