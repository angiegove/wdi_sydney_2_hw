CREATE TABLE posts (
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  body TEXT,
  created_at TIMESTAMP
);

CREATE TABLE comments (
  id SERIAL4 PRIMARY KEY,
  post_id SERIAL4,
  person TEXT,
  comment TEXT
);