CREATE DATABASE burgerdb;
USE burgerdb;

CREATE TABLE burgers
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	burger_name text NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);