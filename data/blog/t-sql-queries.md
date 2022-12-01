---
title: "T-SQL Queries"
publishDate: "2007-02-08"
categories: 
  - "general"
tags:
  - "archived"
---

I was trying to figure out how to get a T-SQL to allow a user to enter part of a name to query on, for example the user could enter ML, click a search button which would return all companies with the letters ML in.

I Googled this and looked on MSDN, to no avail, I knew I had achieve the desired result using access a while back, but I was pretty sure I didn't have a company so I could check the syntax, then I recalled where a may have a copy which I did, I cracked it open and found the following:

SELECT IngramPriceList.\* FROM IngramPriceList WHERE IMPartNumber Like '\*'+\[?\]+'\*' Or ManufacturersPartNumber Like '\*'+\[?\]+'\*' Or VendorName Like '\*'+\[?\]+'\*';

After entering this syntax into Visual Studio 2005 Express, thinking it work it didn't, so after reading the required syntax for LIKE in the SQL Express 2005, I came up with this working solution.

SELECT CustomerID, LoginName, \[Company Name\], StreetAddress, townName, countyName, postcode, ContractType, StartDate, FinishDate, Notes, Active

FROM Customers WHERE(\[Company Name\] LIKE '%' + @SearchText + '%')

Were as Access uses '\*' SQL Server uses '%' instead…. Problem fixed. ?
