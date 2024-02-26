INSERT INTO department (id, name)
VALUES  
    (1, 'Finance'),
    (2, 'Marketing'), 
    (3, 'Human Resource'), 
    (4, 'Information Technology');

INSERT INTO role (id, job_title, salary, department_id)
VALUES  
    (1, 'Financial Analyst', 130000, 1), 
    (2, 'Payroll Specialist', 85000, 3), 
    (3, 'Social Media Manager', 65000, 2), 
    (4, 'Desktop Support', 75000, 4), 
    (5, 'General Manager', 110000, 3), 
    (6, 'Helpdesk Support', 95000, 4), 
    (7, 'Accountant', 85000, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  
    (1, 'Lara', 'Parker', 3, 463), 
    (2, 'Shelly', 'Martins', 5, 426), 
    (3, 'Renee', 'Wold', 1, 321), 
    (4, 'Janessa', 'Williams', 6, 465 ), 
    (5, 'Keri', 'Fisher', 7, 261), 
    (6, 'Martina', 'Lopez', 4, 934), 
    (7, 'Lucy', 'Wei', 6, 312), 
    (8, 'Jameeka', 'Best', 2, 634), 
    (9, 'Kandi', 'Garcon', 2, 452), 
    (10, 'Ella', 'Ramses', 1, 673), 
    (11, 'Theresa', 'Ahn', 6, 621), 
    (12, 'Brittney', 'Faye', 4, 24), 
    (13, 'Anna', 'Ansel', 7, 981), 
    (14, 'Pheobe', 'Mayce', 7, 92), 
    (15, 'Lisa', 'Neucar', 6, 562);
