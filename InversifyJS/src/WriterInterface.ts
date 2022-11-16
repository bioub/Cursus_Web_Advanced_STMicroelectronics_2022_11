export const WriterInterface = Symbol();
export interface WriterInterface {
  write(msg: string): Promise<void>;
}
