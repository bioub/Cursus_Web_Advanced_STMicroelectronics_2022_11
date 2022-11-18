import { EventEmitter } from 'node:events';

type User = {
  username: string;
  password: string;
}

class UserService extends EventEmitter {
  async register(user: User) {
    // TODO insert in Database
    this.emit('registered', user);
  }

  login() {

  }
}


// Projet 1
// quand un user est créé -> envoyer un email
const userServiceProject1 = new UserService();
userServiceProject1.on('registered', (user: User) => {
  console.log('Sending EMAIL to ' + user.username);
});
// Projet 2
// quand un user est créé -> envoyer un SMS
const userServiceProject2 = new UserService();
userServiceProject2.on('registered', (user: User) => {
  console.log('Sending SMS to ' + user.username);
});


userServiceProject1.register({ username: 'toto', password: 'ABCD'});
userServiceProject1.register({ username: 'titi', password: 'ABCD'});
userServiceProject2.register({ username: 'tata', password: 'ABCD'});
