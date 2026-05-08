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

async function createItem(item){
  let sql = `
    INSERT INTO Item(user_id, category, description, size, item_condition, price)
    VALUES(?,?,?,?,?,?)
  `
  return await con.query(sql, [item.user_id, item.category, item.description, item.size, item.item_condition, item.price])
}

async function getItemById(item_id){
  let sql = `SELECT * FROM Item WHERE item,_id = ?`
  let result = await con.query(sql, [item_id])
  return result[0]
}

async function updateItem(item){
  let sql = `
    UPDATE Item
    SET category = ?, description = ?, size = ?, item_condition = ?, price = ?
    WHERE item_id = ?
  `
  return await con.query(sql, [item.category, item.description, item.size, item.item_condition, item.price, item.item_id])
}


module.exports = { getAllItems }