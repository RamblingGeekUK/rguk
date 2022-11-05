---
title: "Windows 7 : User Profile Service Failed The Logon"
publishDate: "2014-12-17"
categories: 
  - "general"
tags: 
  - "7"
  - "domain"
  - "login"
  - "logon"
  - "windows"
---

So after installing a new Windows Server (DC) joined one of the existing PC's to the domain and when it rebooted and I tried to login into it I received the following error, "User Profile Service Failed The Logon"

The solution appears to be to login to the PC locally and search for all files with the extension ".SQM", once found delete them all reboot and try logging in to the domain again.

This worked for me, I hope it works for you.

Source: [Forum](http://community.spiceworks.com/topic/88886-windows-7-user-profile-service-failed-the-logon)
