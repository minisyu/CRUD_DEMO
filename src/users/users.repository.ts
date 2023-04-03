export class User {
  id: number;
  username: string;
  password: string;

  constructor(id: number, username: string, password: string) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
}

const user = new User(1, "kiwi", "k");
