CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  email varchar(255) NOT NULL UNIQUE,
  password varchar(255)
);

CREATE TABLE IF NOT EXISTS todos (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users (id),
  name varchar(255) NOT NULL,
  description TEXT
);

INSERT INTO users (first_name, last_name, email, password) VALUES ('Mario', 'Rossi', 'rossi@email.it', '$2a$10$z4YNieUKurbDNVw5xy8APe6/KyVsHvIwPFAgtzMZlB2wBz5zMzumm');
INSERT INTO todos (user_id, name, description) VALUES (1, 'Test', 'Test Description');
INSERT INTO todos (user_id, name, description) VALUES (1, 'Test 2', 'Test 2 Description');