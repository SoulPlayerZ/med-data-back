const connection = require('./connection');

const findUser = async () => {
  const [user] = await connection.execute(
    'SELECT * FROM user;'
  );

  return user;
};

module.exports = {
  findUser,
};