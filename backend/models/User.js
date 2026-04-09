const { pool } = require('../config/db');

const findByEmail = async (email) => {
  const [rows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0] || null;
};

const findById = async (id) => {
  const [rows] = await pool.execute(
    'SELECT id, name, email, role FROM users WHERE id = ?',
    [id]
  );
  return rows[0] || null;
};

const create = async ({ name, email, password }) => {
  const [result] = await pool.execute(
    `INSERT INTO users (name, email, password, role, is_verified) VALUES (?, ?, ?, 'student', 1)`,
    [name, email, password]
  );
  return { id: result.insertId, name, email, role: 'student' };
};

module.exports = { findByEmail, findById, create };
