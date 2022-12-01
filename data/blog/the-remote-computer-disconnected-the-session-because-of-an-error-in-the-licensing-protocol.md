---
title: "The remote computer disconnected the session because of an error in the licensing protocol."
publishDate: "2011-02-25"
categories: 
  - "general"
tags:
  - "archived"
---

[![image](https://ramberlinggeek.co.uk/wp-content/uploads/2011/02/image_thumb.png "image")](https://ramberlinggeek.co.uk/wp-content/uploads/2011/02/image.png)

Kept receiving this error trying to connect to Windows Server 2008 R2 – Remote Desktop Server. After using RD Web Access page.

The solution was to right click on the RDP client and run as Admin which ensures that it can update the registry, you only have to do this once and then from there it works fine from the website from then on.
