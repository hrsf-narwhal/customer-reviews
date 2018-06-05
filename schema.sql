DROP DATABASE IF EXISTS REVIEWS;

CREATE DATABASE reviews;

USE reviews;

CREATE TABLE products (
	id int,
	PRIMARY KEY(id)
);

CREATE TABLE reviews (
id int AUTO_INCREMENT,
stars int NOT NULL,
name varchar(60), 
date varchar(40),
photo text,
review text NOT NULL,
itemDescription text,
customerAvatar text,
productID int,
FOREIGN KEY(productID) REFERENCES products(id),
PRIMARY KEY(id)
);


