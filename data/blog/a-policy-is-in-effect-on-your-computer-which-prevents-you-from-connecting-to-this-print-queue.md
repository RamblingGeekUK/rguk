---
title: "A policy is in effect on your computer which prevents you from connecting to this print queue"
publishDate: "2016-10-19"
categories: 
  - "general"
tags: 
  - "archived"
---

I received this error after browsing to \\\\server\\printershare, right-clicking and selecting connect, it proceeded as normal then the error was thrown, removing KB3170455 will resolve the issue.

You can check if it's installed by opening PowerShell and running:-

```
get-hotfix KB3170455
```

this will return a list if it's installed. You can remove it from the command line (doesn't appear to be a PowerShell cmdlet at this time) by running: -

```
wusa.exe /uninstall /kb:3114409 /norestart /quiet
```

KB3170455 seems to be the causing this issue and removing it will resolve the issue. I've not figured a how to install the printer without removing this update.  If you have one then please post it in the comments.
