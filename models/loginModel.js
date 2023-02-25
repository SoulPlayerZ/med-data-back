const connection = require('./connection');

const findUsers = async () => {
  const [user] = await connection.execute(
    'SELECT * FROM user;',
    [],
  );

  return user;
};

module.exports = {
  findUsers,
};