const con = require("./db_connect")
const bcrypt = require("bcrypt")

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

async function register(user){
  let cUser = await getUserByEmail(user.email)
  if(cUser) throw Error("Email already in use!")

    let hashedPassword = await bcrypt.hash(user.password, 10)

    let sql = `
    INSERT INTO User(full_name, email, password, location, bio)
    VALUES(?, ?, ?, ?, ?)
    `

    await con.query(sql, [user.full_name, user.email, hashedPassword, user.location, user.bio])

    return await NavigatorLogin(userß)
}



module.exports = { getAllUsers }