DROP DATABASE IF EXISTS school_db;
CREATE DATABASE IF NOT EXISTS school_db;

USE school_db;

DROP TABLE IF EXISTS teacher;

CREATE TABLE IF NOT EXISTS teacher
(
    id                  INT          NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name          VARCHAR(50)  NOT NULL,
    last_name           VARCHAR(50)  NOT NULL,
    gender              VARCHAR(1)   NOT NULL,
    date_of_birth       DATE         NOT NULL,
    subject_taught      VARCHAR(100) NOT NULL,
    years_of_experience INT(100)     NOT NULL
);

DESCRIBE teacher;