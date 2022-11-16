import axios from 'axios';
import { User } from './model';

export class UserPage {
  async get<T>(url: string) {
    const res = await axios.get<T>(url);
    return res.data;
  }
  async fetchUsers() {
    return await this.get<User[]>('http://localhost:3000/users');
  }
  async render() {
    const users = await this.fetchUsers();

    for (const user of users) {
      console.log(user.name);
    }
  }
}
