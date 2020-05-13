-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

select p.ProductName, c.CategoryName
from Product as p 
join Category as c 
on p.CategoryId = c.Id; 


-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

select o.Id, s.CompanyName
from [Order] as o 
    join Shipper as s 
    on o.ShipVia = s.Id
    where o.OrderDate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

select p.ProductName, p.QuantityPerUnit
from Product as p 
join [Order] as o 
on p.SupplierId = o.ShipVia
where o.id = 10251
order by p.ProductName 

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select o.id, c.CompanyName, e.LastName
from [Order] as o 
join Customer as c 
on o.CustomerId = c 
join Employee as e 
on o.EmployeeId = e.Id 