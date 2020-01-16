import Database from '../db/db';
import query from '../db/queries';

class User {
    constructor(username, email, password) {
      this.username = username;
      this.email = email;
      this.password = password;
    }

    static async findUser({email, password}) {
      const { rows } = await Database.createQuery(query.findUser, [email, password]);
      return rows[0];
    }
}
  export default User;