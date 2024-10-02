/* Create tables */

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nickname VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    city VARCHAR(100) NOT NULL
);

CREATE INDEX idx_nickname ON users(nickname);
CREATE INDEX idx_city ON users(city);

CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    date DATE NOT NULL
);

CREATE INDEX idx_date ON posts(date);

CREATE TABLE interactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type ENUM('like', 'comment') NOT NULL,
    time TIME NOT NULL,
    post_id INT NOT NULL,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
);
