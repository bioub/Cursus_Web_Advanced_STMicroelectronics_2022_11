import { expect } from "chai";
import { localStorageToUpper } from "./localStorageToUpper";

describe('localStorageToUpper function', () => {
  it('should return value from localStorage in uppercase', () => {
    globalThis.localStorage = {
      getItem(_: string) {
        return 'abc';
      },
    } as any;

    expect(localStorageToUpper('my-key')).to.equals('ABC');
    (globalThis.localStorage as any) = undefined;
  });
});