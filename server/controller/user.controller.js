import User from '../model/user.model';
import GenerateToken from '../helpers/generateToken';

class UserController {
  static async userSignin(req, res) {
    try {
      const user = await User.findUser(req.body);

      if (!user) {
        return res.status(401).json({
          status: 401,
          error: 'Incorrect Email or Password',
        });
      } else {
        const token = GenerateToken.getToken(user);

        res.status(200).json({
          status: 200,
          message: 'Admin is successfully logged in',
          data: {
            token: token,
          },
        });
      }
    } catch (error) {
      res.status(500).json({
        status: 500,
        error: 'Internal Server Error!',
      });
    }
  }
}

export default UserController;
