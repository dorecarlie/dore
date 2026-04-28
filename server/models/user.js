const con = require("./db_connect")

async function createUserTable() {
    let sql = `
    CREATE TABLE IF NOT EXISTS User (
    user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL,
    bio VARCHAR(100) NOT NULL
    ); `

    await con.query(sql)
}

createUserTable()

async function getAllUsers() {
    let sql = `
      SELECT * FROM User;
    `
    return await con.query(sql)
}

module.exports = { getAllUsers }