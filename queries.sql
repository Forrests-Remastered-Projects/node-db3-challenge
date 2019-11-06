-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select p.productname, c.categoryname
from products as p
join categories as c on p.categoryid = c.categoryid

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT OrderId, ShipperName from Orders as O
JOIN Shippers as S
on O.ShipperId = S.ShipperId WHERE O.OrderDate > 2012-8-09;

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT Products.ProductName, OrderDetails.Quantity
FROM Products
JOIN OrderDetails
ON Products.ProductID=OrderDetails.ProductID
WHERE OrderDetails.OrderID=10251
ORDER BY Products.ProductName ASC;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT Orders.OrderID, Customers.CustomerName, Employees.LastName
FROM Orders
JOIN Customers
ON Orders.CustomerID=Customers.CustomerID
JOIN Employees
ON Orders.EmployeeID=Employees.EmployeeID;