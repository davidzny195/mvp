import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default {
  login: async (email: string, password: string): Promise<string> => {
    const user = await prisma.users.findUnique({ where: { email } });
    if (!user) {
      throw new Error('No user');
    }
    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) {
      throw new Error('Password does not match');
    }

    const payload = {
      username: user.username,
      email: user.email,
    };
    const token = jwt.sign(payload, process.env.SECRET_KEY!, {
      expiresIn: '24h',
    });
    return token;
  },

  signup: async (
    username: string,
    email: string,
    password: string
  ): Promise<any> => {
    const existingUser = await prisma.users.findUnique({ where: { email } });
    if (existingUser) {
      throw new Error('Email exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const newUser = await prisma.users.create({
        data: {
          username,
          email,
          password: hashedPassword,
        },
      });
      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  },
};
