import User from "./user.js";

class Post {
  name;
  number;
  constructor(name) {
    this.name = name;
  }
  get summary() {
    return `${this.name} publication number ${this.number}`;
  }
}

export { Post };
export default Post;
