---
title: "Enabling WordPress AutoUpdate - Windows Server"
publishDate: "2017-07-08"
categories: 
  - "general"
tags: 
  - "youtube"
  - "archived"
---

Looking at how to get WordPress running on Windows Server and allowing auto update to work.  This is what I did and it seems to work.   

https://youtu.be/lt78-D1lZnY

I used the Web Platform Installer to install WordPress, I then downgraded it to WordPress 4.7, I just copied the files over the install.  So I could test the upgrade process.  When installing using the Web Platform you need to provide random generated key's, I found this [https://api.wordpress.org/secret-key/1.1/salt](https://api.wordpress.org/secret-key/1.1/salt) which generates random keys for you, but the Windows Installer doesn't like $, which is a tad annoying. 

Hope this helps. Have fun :-)
