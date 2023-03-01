const connection = require('../connection/connection');

const generateToken = async (name) => {
  const [user] = await connection.execute(
    'SELECT * FROM user WHERE first_name = ?;',
    [name]
  );

  return user;
};

const getUsers = async () => {
  const [user] = await connection.execute(
    'SELECT * FROM user;'
  );

  return user;
};

module.exports = {
  generateToken,
  getUsers,
};