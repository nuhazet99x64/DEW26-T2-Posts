import User from "./user.js";

class Client extends User {
  billing;
  constructor(nombre) {
    super(nombre);
    this.billing = 0;
  }
}

export { Client };
export default Client;
