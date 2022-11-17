import { HttpClient } from './HttpClient';
import { UserPage } from './UserPage';
import { UserService } from './UserService';

const httpClient = new HttpClient();
const userService = new UserService(httpClient)
const userPage = new UserPage(userService);

// container.get(UserPage);

userPage.render();
