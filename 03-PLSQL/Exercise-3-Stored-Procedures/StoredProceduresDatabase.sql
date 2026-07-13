CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER(10,2)
);

INSERT INTO Accounts VALUES (1001,101,'Savings',50000);

INSERT INTO Accounts VALUES (1002,102,'Savings',20000);

INSERT INTO Accounts VALUES (1003,103,'Current',70000);

INSERT INTO Accounts VALUES (1004,104,'Savings',15000);

COMMIT;

CREATE TABLE Employeees (
    EmployeeID NUMBER PRIMARY KEY,
    EmployeeName VARCHAR2(50),
    Department VARCHAR2(30),
    Salary NUMBER(10,2)
);

INSERT INTO Employeees VALUES (1,'Ravi','IT',50000);

INSERT INTO Employeees VALUES (2,'Anita','HR',45000);

INSERT INTO Employeees VALUES (3,'Kiran','IT',60000);

INSERT INTO Employeees VALUES (4,'Sneha','Finance',55000);

COMMIT;