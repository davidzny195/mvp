const { authService } = require('../services');

module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const token = await authService.login(email, password);
      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  signup: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = await authService.signup(username, email, password);
      res.status(201).json({ user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
