const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const generateAuthToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });

const generateVerificationToken = () =>
  crypto.randomBytes(32).toString('hex');

module.exports = { generateAuthToken, generateVerificationToken };
