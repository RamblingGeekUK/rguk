---
title: "Windows Working with Time"
publishDate: "2015-04-23"
categories: 
  - "general"
tags:
  - "archived"
---

To find out the current time source:

```
w32tm /query /source
```

To resync a server or to force a server to update it's time with the source:

```
w32tm /resync
```

Setting external time server:

```
w32tm /config /manualpeerlist:pool.ntp.org /syncfromflags:MANUAL
Stop-Service w32time
Start-Service w32time
```

A List of Time Servers: [KB262860](https://support.microsoft.com/kb/262680) 

How to configure an authoritative time server in Windows Server: [KB816042](https://support.microsoft.com/kb/816042) [](https://support.microsoft.com/kb/816042)

UK Time Server Pool can be found [here](https://www.pool.ntp.org/zone/uk).
