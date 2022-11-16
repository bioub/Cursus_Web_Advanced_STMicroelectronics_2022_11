import { WriterInterface } from "./WriterInterface";
import fs from 'fs/promises';
import { injectable } from "inversify";

@injectable()
export class FileWriter implements WriterInterface {
  constructor(private filePath = 'app.log') {}

  async write(msg: string) {
    await fs.appendFile(this.filePath, msg + '\n');
  }
}
