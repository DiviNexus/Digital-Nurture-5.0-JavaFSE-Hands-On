DECLARE

    CURSOR loan_cursor IS
        SELECT LoanID, CustomerID, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30;

BEGIN

    FOR loan_record IN loan_cursor LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer '
            || loan_record.CustomerID
            || ' has Loan '
            || loan_record.LoanID
            || ' due on '
            || TO_CHAR(loan_record.DueDate, 'DD-MON-YYYY')
        );

    END LOOP;

END;
/

