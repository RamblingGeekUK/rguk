---
title: "Bypass your WSUS server and use Windows"
publishDate: "2013-08-01"
categories: 
  - "general"
---

In many businesses the network has been configured for Windows PC's to connect to a local server for Microsoft Updates. Generally running Windows Server Updates Server or WSUS for short.  If it \[WSUS\] has an issue and updates aren't being pulled down, but you need to updated a PC quickly, then you can do the following to turn off WSUS for that PC, which will then allow you to obtain updates directly from Microsoft Servers.

1) Open your registry editor 2) Browse to HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsUpdate\\AU 3) Change the key UseWUServer from 1 to 0 4) Restart the Windows Update service 5) Run Windows Update and it should connect and downloads start

**SOURCE:**  [Eric's Blog](Blog http://erichagstrom.com/node/41)[](http://erichagstrom.com/node/41)
