---
title: "T-SQL:  Calculate Hours, Mins and Secs from StartTime and EndTime"
publishDate: "2008-01-13"
categories: 
  - "general"
---

  
select  
  sum(TotalSeconds) / 3600 as Hours,  
  (sum(TotalSeconds) % 3600) / 60 as Minutes,  
  sum(TotalSeconds) % 60 as Seconds  
from  
(  
select ArrivalTime, DepartureTime, DateDiff(second, ArrivalTime, DepartureTime) as TotalSeconds  
from SSR  
where CustomerID = 10  
) x  
  
Thanks to this [site](https://www.sqlteam.com/article/working-with-time-spans-and-durations-in-sql-server) for the heads up.
