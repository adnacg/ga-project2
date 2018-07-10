CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name varchar(255),
  email varchar(255) UNIQUE,
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
  pax INTEGER,
  availability varchar(255),
  skill varchar(255),
  message varchar(255),
  post_time timestamp DEFAULT CURRENT_TIMESTAMP,
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

CREATE TABLE IF NOT EXISTS request (
  id SERIAL PRIMARY KEY,
  requester_id INTEGER, -- request FROM which user
  post_id INTEGER, -- for which post
  status varchar(255), -- pending, accepted, declined
  constraint request_unique UNIQUE (requester_id, post_id)
);