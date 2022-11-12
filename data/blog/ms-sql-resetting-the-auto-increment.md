---
title: "MS SQL resetting the auto increment"
publishDate: "2010-05-05"
categories: 
  - "general"
---

DBCC CHECKIDENT('test', RESEED, 10001) ;

where 'test' is the tables name we want to reset.

There is a trick if you already have some date into your table your next inserting will start from 0.

I’ve tested this and it work a treat.

Found here: [https://weblogs.asp.net/stoianbucovich/archive/2008/03/03/ms-sql-resetting-the-auto-increment.aspx](https://weblogs.asp.net/stoianbucovich/archive/2008/03/03/ms-sql-resetting-the-auto-increment.aspx "https://weblogs.asp.net/stoianbucovich/archive/2008/03/03/ms-sql-resetting-the-auto-increment.aspx")

Enjoy :-)
