import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

class GenerateToken {
  static getToken(user) {
    const payload = {
      userId: user.id,
      email: user.email,
      username: user.username
    };
    return jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '1d' });
  }
}

export default GenerateToken;