const connection = require('../connection/connection');

const findUser = async (name) => {
  const [user] = await connection.execute(
    'SELECT * FROM user WHERE first_name = ?;',
    [name]
  );

  return user;
};

module.exports = {
  findUser,
};