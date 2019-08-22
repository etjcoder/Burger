CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id int Not Null Auto_Incremenet,
    burger_name varchar(255) NOT NULL,
    devoured BOOLEAN default false
    PRIMARY KEY (id)
);




