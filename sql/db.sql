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

DROP TABLE IF EXISTS classroom;

CREATE TABLE IF NOT EXISTS classroom
(
    id             INT        NOT NULL AUTO_INCREMENT PRIMARY KEY,
    capacity       ENUM (10, 20, 30, 40, 50),
    classroom_name VARCHAR(3) NOT NULL
);

DESCRIBE classroom;

INSERT INTO classroom (capacity, classroom_name)
VALUES (10, '101'),
       (20, '102'),
       (30, '103'),
       (40, '104'),
       (50, '105');

DROP TABLE IF EXISTS lesson;

CREATE TABLE IF NOT EXISTS lesson
(
    id           INT  NOT NULL AUTO_INCREMENT PRIMARY KEY,
    classroom_id INT,
    teacher_id   INT,
    subject      ENUM ('Alchemy', 'Physiology', 'Science', 'Speech', 'Strategy', 'Tactics', 'Law', 'Biology', 'Math', 'Physics', 'Other'),
    day_of_week  ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'),
    time_from    TIME NOT NULL,
    time_to      TIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (teacher_id) REFERENCES teacher (id),
    FOREIGN KEY (classroom_id) REFERENCES classroom (id)
);

DESCRIBE lesson;

INSERT INTO lesson (classroom_id, teacher_id, subject, day_of_week, time_from, time_to)
VALUES (1, 1, 'Alchemy', 'Monday', '08:30:00', '14:30:00'),
       (2, 2, 'Math', 'Thursday', '08:30:00', '14:30:00'),
       (3, 7, 'Physiology', 'Wednesday', '08:30:00', '14:30:00'),
       (4, 4, 'Science', 'Wednesday', '08:30:00', '14:30:00'),
       (4, 8, 'Speech', 'Thursday', '08:30:00', '14:30:00'),
       (4, 4, 'Strategy', 'Thursday', '08:30:00', '14:30:00'),
       (5, 5, 'Physiology', 'Thursday', '08:30:00', '14:30:00'),
       (5, 6, 'Tactics', 'Thursday', '08:30:00', '14:30:00'),
       (5, 7, 'Law', 'Thursday', '08:30:00', '14:30:00'),
       (3, 8, 'Biology', 'Thursday', '08:30:00', '14:30:00'),
       (3, 4, 'Math', 'Thursday', '08:30:00', '14:30:00'),
       (2, 2, 'Math', 'Monday', '08:30:00', '12:30:00'),
       (2, 8, 'Physics', 'Friday', '10:30:00', '19:30:00'),
       (2, 7, 'Math', 'Thursday', '07:30:00', '08:30:00'),
       (1, 6, 'Other', 'Sunday', '14:30:00', '18:30:00'),
       (1, 5, 'Other', 'Sunday', '14:30:00', '18:30:00');