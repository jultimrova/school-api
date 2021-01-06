DROP DATABASE IF EXISTS school_db;
CREATE DATABASE IF NOT EXISTS school_db;

USE school_db;

DROP TABLE IF EXISTS teacher;

CREATE TABLE IF NOT EXISTS teacher
(
    id                  INT                                                                 NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name          VARCHAR(50)                                                         NOT NULL,
    last_name           VARCHAR(50)                                                         NOT NULL,
    gender              VARCHAR(1)                                                          NOT NULL,
    date_of_birth       DATE                                                                NOT NULL,
    subject_taught      ENUM ('Alchemy', 'Physiology', 'Science', 'Law', 'Biology', 'Math') NOT NULL,
    years_of_experience INT(100)                                                            NOT NULL
);

INSERT INTO teacher (first_name, last_name, gender, date_of_birth, subject_taught, years_of_experience)
VALUES ('Micah', 'Kristensen', 'M', '1992-10-10', 'Math', 11),
       ('Fred', 'March', 'M', '1991-10-10', 'Math', 10),
       ('Nick', 'Bell', 'M', '1970-10-10', 'Math', 20),
       ('Bill', 'Fallen', 'M', '1982-10-10', 'Alchemy', 8),
       ('Ellison', 'Cell', 'F', '1995-10-10', 'Physiology', 2),
       ('May', 'Tornton', 'F', '1970-10-10', 'Science', 20),
       ('Marta', 'Norton', 'F', '1992-10-10', 'Math', 12),
       ('Nickolas', 'Darvin', 'M', '1992-10-10', 'Biology', 8),
       ('Bernard', 'Angel', 'M', '1994-10-10', 'Law', 5),
       ('Debi', 'Deft', 'F', '1960-10-10', 'Math', 40);

DESCRIBE teacher;

DROP TABLE IF EXISTS classroom;

CREATE TABLE IF NOT EXISTS classroom
(
    id       INT                                 NOT NULL AUTO_INCREMENT PRIMARY KEY,
    capacity ENUM ('10', '20', '30', '40', '50') NOT NULL,
    name     VARCHAR(3)                          NOT NULL
);

DESCRIBE classroom;

INSERT INTO classroom (capacity, name)
VALUES ('10', '100'),
       ('50', '101'),
       ('20', '102'),
       ('30', '103'),
       ('40', '104'),
       ('50', '105');

DROP TABLE IF EXISTS lesson;

CREATE TABLE IF NOT EXISTS lesson
(
    id           INT                                                                 NOT NULL AUTO_INCREMENT PRIMARY KEY,
    classroom_id INT,
    teacher_id   INT,
    subject      ENUM ('Alchemy', 'Physiology', 'Science', 'Law', 'Biology', 'Math') NOT NULL,
    day_of_week  ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'),
    time_from    TIME                                                                NOT NULL,
    time_to      TIME                                                                NOT NULL,
    CONSTRAINT fk_classroom
        FOREIGN KEY (classroom_id) REFERENCES classroom (id),
    CONSTRAINT fk_teacher
        FOREIGN KEY (teacher_id) REFERENCES teacher (id)
);

DESCRIBE lesson;

INSERT INTO lesson (classroom_id, teacher_id, subject, day_of_week, time_from, time_to)
VALUES (6, 3, 'Alchemy', 'Monday', '08:30:00', '14:30:00'),
       (1, 1, 'Math', 'Thursday', '08:30:00', '14:30:00'),
       (3, 5, 'Physiology', 'Wednesday', '08:30:00', '14:30:00'),
       (4, 6, 'Science', 'Wednesday', '08:30:00', '14:30:00'),
       (6, 9, 'Law', 'Thursday', '08:30:00', '14:30:00'),
       (4, 9, 'Law', 'Thursday', '09:30:00', '14:30:00'),
       (5, 5, 'Physiology', 'Thursday', '10:30:00', '14:30:00'),
       (5, 6, 'Science', 'Thursday', '08:30:00', '14:30:00'),
       (6, 9, 'Law', 'Thursday', '07:30:00', '14:30:00'),
       (3, 8, 'Biology', 'Thursday', '09:30:00', '14:30:00'),
       (1, 10, 'Math', 'Thursday', '12:30:00', '14:30:00'),
       (1, 10, 'Math', 'Monday', '11:30:00', '12:30:00'),
       (2, 9, 'Law', 'Friday', '10:30:00', '19:30:00'),
       (1, 10, 'Math', 'Thursday', '07:30:00', '08:30:00'),
       (4, 1, 'Math', 'Thursday', '14:30:00', '18:30:00'),
       (1, 8, 'Biology', 'Sunday', '13:30:00', '18:30:00'),
       (1, 8, 'Biology', 'Sunday', '12:30:00', '18:30:00'),
       (2, 2, 'Math', 'Thursday', '8:30:00', '14:30:00'),
       (1, 3, 'Math', 'Thursday', '8:30:00', '14:30:00');