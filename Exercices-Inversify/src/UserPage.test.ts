import { UserPage } from './UserPage';

test('fetchUsers resolves users', async () => {
  const userPage = new UserPage();
  const users = await userPage.fetchUsers();
  expect(users[0].name).toBe('Leanne Graham');
});
