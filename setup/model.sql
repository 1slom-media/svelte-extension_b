CREATE DATABASE extension_b;
\c extension_b;

create extension pgcrypto;

CREATE TABLE IF NOT EXISTS users(
    user_id serial primary key,
    username varchar(32) not null,
    password varchar(64) not null,
    repeat_password varchar(64) not null,
    email text not null
);