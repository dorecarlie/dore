const con = require("./db_connect")

async function createUserTable() {
    let sql = `
    CREATE TABLE IF NOT EXISTS Item (
    item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    category VARCHAR(50) NOT NULL,
    description TEXT,
    size VARCHAR(20),
    item_condition VARCHAR(100),
    price VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
    ); `

    await con.query(sql)
}

createUserTable()

async function getAllItems() {
    let sql = `
      SELECT * FROM Item;
    `
    return await con.query(sql)
}

module.exports = { getAllItems }