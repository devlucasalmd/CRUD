const db = require('../db');

db.query(`
    CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
    );
    `);

module.exports = {
    createUser: (user, callback) => {
        const { username, password } = user;
        db.query(
            'INSERT INTO users (username, password) VALUES (?, ?)',
            [username, password],
            callback
        ); 
    },
    findUserByUsername: (username, callback) => {
        db.query('SELECT * FROM users WHERE username = ?', [username], callback);
    },
}