import { container } from './container';
import { FakeHttpClient } from './FakeHttpClient';
import { HttpClientInterface } from './HttpClientInterface';
import { UserService } from './UserService';

describe('UserService', () => {
  beforeEach(() => {
    // create a snapshot so each unit test can modify
    // it without breaking other unit tests
    container.snapshot();
  });

  afterEach(() => {
    // Restore to last snapshot so each unit test
    // takes a clean copy of the application container
    container.restore();
  });

  test('fetchUsers resolves users with fake request', async () => {
    const httpClient = new FakeHttpClient();
    httpClient.setFakeData([{ id: 1, name: 'Toto' }]);

    container.rebind(HttpClientInterface).toConstantValue(httpClient);

    const userService = container.get(UserService);

    const users = await userService.fetchUsers();
    expect(users[0].name).toBe('Toto');
  });

  test('fetchUsers resolves users with real request', async () => {
    const userService = container.get(UserService);

    const users = await userService.fetchUsers();
    expect(users[1].name).toBe('Ervin Howell');
  });
});
