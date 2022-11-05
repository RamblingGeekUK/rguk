---
title: "Windows Working with Time"
date: "2015-04-23"
categories: 
  - "general"
---

To find out the current time source:

w32tm /query /source

To resync a server or to force a server to update it's time with the source:

w32tm /resync

Setting external time server:

w32tm /config /manualpeerlist:pool.ntp.org /syncfromflags:MANUAL
Stop-Service w32time
Start-Service w32time

A List of Time Servers: [KB262860](http://support.microsoft.com/kb/262680) 

How to configure an authoritative time server in Windows Server: [KB816042](http://support.microsoft.com/kb/816042) [](http://support.microsoft.com/kb/816042)

UK Time Server Pool can be found [here](http://www.pool.ntp.org/zone/uk).
