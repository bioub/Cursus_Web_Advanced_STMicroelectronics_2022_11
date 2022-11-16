interface HelloInterface {
  name: string;
  hello(): string;
}

class Contact implements HelloInterface {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  hello() {
    return `Hello ${this.name}`;
  }
}


const romain = new Contact('Romain');
console.log(romain.name);

class Trainer extends Contact {
  public speciality: string;

  constructor(name: string, speciality: string) {
    super(name);
    this.speciality = speciality;
  }

  hello() {
    return `${super.hello()}, my speciality is ${this.speciality}`;
  }
}


const trainer: HelloInterface = new Trainer('Romain', 'JS');
console.log(trainer.hello());





// class User {
//   private username: string;
//   constructor(username: string) {
//     this.username = username;
//   }
// }

class User {
  constructor(public username: string) {}

}

const user = new User('toto');
console.log(user.username);
