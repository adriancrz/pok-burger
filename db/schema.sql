  
CREATE DATABASE IF NOT EXISTS pokeburgers_db;
USE pokeburgers_db;

DROP TABLE IF EXISTS pokeburgers;

-- Create the burgers table
CREATE TABLE pokeburgers (
    id int NOT NULL AUTO_INCREMENT,
    pokeburger_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);