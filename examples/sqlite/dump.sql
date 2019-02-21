PRAGMA foreign_keys
=OFF;
BEGIN TRANSACTION;
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR
(50),
  email VARCHAR
(50)
);
INSERT INTO users
VALUES(1, 'Haidar', 'haidar@gmail.com');
INSERT INTO users
VALUES(2, 'Hanif', 'hanif@gmail.com');
INSERT INTO users
VALUES(3, 'Impact', 'impactbyte@gmail.com');
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence
VALUES('users', 3);
COMMIT;
