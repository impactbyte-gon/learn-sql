# Using MySQL

## INSTALLATION

```sh
brew install mysql
sudo apt isntall mysql-server
```

## SETUP

```sh
mysql_secure_installation
```

## RUN

```sh
mysql -u root -p
```

## CREATE DATABASE

```sql
CREATE DATABASE mytasks;
```

Output:

```txt
Query OK, 1 row affected (0.01 sec)
```

```sql
USE mytasks;
```

Output:

```txt
Database changed
```

## CREATE TABLE

Table:

| id  | name   | email            |
| --- | ------ | ---------------- |
| 1   | Haidar | haidar@gmail.com |
| 2   | Hanif  | hanif@gmail.com  |
| 3   | Impact | impact@gmail.com |

SQL Create Table:

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  email VARCHAR(50)
);
```

```txt
Query OK, 0 rows affected (0.01 sec)
```

## INSERT DATA

```sql
INSERT INTO users (name, email)
VALUES
('Haidar', 'haidar@gmail.com'),
('Hanif', 'hanif@gmail.com'),
('Impact', 'impactbyte@gmail.com');
```

Output:

```txt
Query OK, 3 rows affected (0.02 sec)
Records: 3  Duplicates: 0  Warnings: 0
```

## SELECT DATA

```sql
SELECT * FROM users;
```

Output:

```txt
+----+--------+----------------------+
| id | name   | email                |
+----+--------+----------------------+
|  1 | Haidar | haidar@gmail.com     |
|  2 | Hanif  | hanif@gmail.com      |
|  3 | Impact | impactbyte@gmail.com |
+----+--------+----------------------+
3 rows in set (0.00 sec)
```

## DUMP DATA

```sh
cd examples/mysql
mysqldump -u root -p --databases mytasks > mytasks-dump.sql
```

Then check the `mytasks-dump.sql` file.
