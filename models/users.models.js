const db = require("../db/connection.js");

const selectUsers = () => {
  return db.query(`SELECT * FROM users`).then(({ rows }) => {
    return rows;
  });
};

const selectUserByUsername = (username) => {
  return db.query(`SELECT * FROM users
                  WHERE username = $1`, [username]).then(({rows}) => {
                    return rows[0]
                  });
};

module.exports = { selectUsers, selectUserByUsername };
