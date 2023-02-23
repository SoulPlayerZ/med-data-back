const connection = require('./connection');

const findUser = async (login) => {
  const [user] = await connection.execute(
    'SELECT first_name FROM user where login = ? and senha = ?;',
    [login],
  );

  return user;
};

module.exports = {
  findUser,
};