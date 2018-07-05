CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name varchar(255),
  email varchar(255),
  password_hash varchar(255),
  bio varchar(255),
  is_deleted varchar(255)
);

CREATE TABLE IF NOT EXISTS instrument (
  id SERIAL PRIMARY KEY,
  name varchar(255)
);

CREATE TABLE IF NOT EXISTS genre (
  id SERIAL PRIMARY KEY,
  name varchar(255)
);

CREATE TABLE IF NOT EXISTS user_instrument (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  instrument_id INTEGER
);

CREATE TABLE IF NOT EXISTS user_genre (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  genre_id INTEGER
);

CREATE TABLE IF NOT EXISTS post (
  id SERIAL PRIMARY KEY,
  location varchar(255),
  post_date DATE,
  pax INTEGER,
  availability varchar(255),
  skill varchar(255),
  message varchar(255),
  status varchar(255), -- active, full or deleted
  is_deleted varchar(255)
);

CREATE TABLE IF NOT EXISTS user_post (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  post_id INTEGER
);

CREATE TABLE IF NOT EXISTS post_instrument (
  id SERIAL PRIMARY KEY,
  post_id INTEGER,
  instrument_id INTEGER
);

CREATE TABLE IF NOT EXISTS post_genre (
  id SERIAL PRIMARY KEY,
  post_id INTEGER,
  genre_id INTEGER
);

-- in model- enforce uniqueness of request, 1 user 1 request to 1 jam
CREATE TABLE IF NOT EXISTS request (
  id SERIAL PRIMARY KEY,
  requester_id INTEGER, -- request FROM which user
  poster_id INTEGER, -- request TO which user
  post_id INTEGER, -- for which post
  status varchar(255) -- pending, accepted or declined
);


--foreign key - enforce unqieuness to a particular request (pair uniqueness)
--dont need this
--is this required? is 1 to 1, and a request is unique, does it make sense to have this?
-- CREATE TABLE IF NOT EXISTS user_request (
--   id SERIAL PRIMARY KEY,
--   user_id INTEGER,
--   request_id INTEGER
-- );














