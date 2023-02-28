import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default {
  login: async (email: string, password: string): Promise<string> => {
    const user = await prisma.user.findUnique({ where: { email } });
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
    console.log(username, email, password, 'PARAMS');
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new Error('Email exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword, 'Hashed');
    try {
      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
        },
      });
      console.log(newUser, 'NEW USER');
      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  },
};
