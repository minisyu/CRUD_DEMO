export class UserEntity {
  id: number;
  username: string;
  password: string;

  constructor(id: number, username: string, password: string) {
    // this = { id: 1, username: "banana", password: "b"}
    this.id = id;
    this.username = username;
    this.password = password.trim();

    // return this;
  }
  //   getId() {
  //     return this.id;
  //   }
  //   setId(id: number) {
  //     if (id < 100) {
  //       this.id = id;
  //     }
  //   }
}

const user = new UserEntity(1, "banana", "b");
//user.getId(); // user.id
