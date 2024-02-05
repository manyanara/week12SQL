INSERT INTO department (id, name)
VALUES  (01, "Finance"),
        (02, "Marketing"), 
        (03, "Human Resource"), 
        (04, "Information Technology");

INSERT INTO role (id, job title, salary, department_id)
VALUES  (01, "Financial Analyst", 130000, 01), 
        (02, "Payroll Specialist", 85000, 03), 
        (03, "Social Media Manager", 65000, 02), 
        (04, "Desktop Support", 75000, 04), 
        (05, "General Manager", 110000, 03), 
        (06, "Helpdesk Support", 95000, 04), 
        (07, "Accountant", 85000, 01);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (01, "Lara", "Parker", 03, 463), 
        (02, "Shelly", "Martins", 05, 426), 
        (03, "Renee", "Wold", 01, 321), 
        (04, "Janessa", "Williams", 06, 465 ), 
        (05, "Keri", "Fisher", 07, 261), 
        (06, "Martina", "Lopez", 04, 934), 
        (07, "Lucy", "Wei", 06, 312), 
        (08, "Jameeka", "Best", 02, 634), 
        (09, "Kandi", "Garcon", 02, 452), 
        (10, "Ella", "Ramses", 01, 673), 
        (11, "Theresa", "Ahn", 06, 621), 
        (12, "Brittney", "Faye", 04, 024), 
        (13, "Anna", "Ansel", 07, 981), 
        (14, "Pheobe", "Mayce", 07, 092), 
        (15, "Lisa", "Neucar", 06, 562);