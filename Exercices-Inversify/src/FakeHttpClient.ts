import { HttpClientInterface } from './HttpClientInterface';

export class FakeHttpClient implements HttpClientInterface {
  private data!: any;
  async get(url: string) {
    return this.data;
  }
  setFakeData(data: any) {
    this.data = data;
  }
}
