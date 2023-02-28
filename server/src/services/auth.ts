const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

module.exports = {
  login: async (email, password) => {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new Error('No user');
    }
    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) {
      throw new Error('Password does not match');
    }

    const payload = {
      id: user.id,
      username: user.username,
      email: user.email,
    };
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: '24h',
    });
    return token;
  },

  signup: async (username, email, password) => {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new Error('Email exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const newUser = await prisma.user.create({
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
