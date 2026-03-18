CREATE TABLE IF NOT EXISTS users(
    user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL,
    bio VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS item (
    item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    category VARCHAR(50) NOT NULL,
    description TEXT,
    size VARCHAR(20),
    item_condition VARCHAR(100),
    price VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
