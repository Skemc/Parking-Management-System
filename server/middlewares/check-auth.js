import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export default async (req, res, next) => {
  if (!req.header('x-auth')) {
    return res.status(400).json({
      status: 400,
      error: 'Token not provided',
    });
  }

  const token = req.header('x-auth');

  try {
    const decoded = await jwt.verify(token, process.env.JWT_KEY);
    req.adminData = decoded;
    next();
  } catch (error) {
    return res.status(403).json({
      status: 403,
      error: 'Invalid token, you are not allowed to access resources',
    });
  }
};