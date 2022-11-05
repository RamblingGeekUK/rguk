---
title: "Windows 7: Running the same application twice"
date: "2012-12-14"
categories: 
  - "general"
---

I was asked recently why a LOB (Line of business) application would no longer allow the user to open the application twice on there new PC, which was running on Windows XP.

Now on Windows 7, it no longer works.

After much Googling..... with no sensible resolutions and after some playing around the solution was found.

- Close the application down.
- Right Click on the Icon and select proprieties.
- Click the advanced button and tick the "Run in separate memory space"
- Click OK on the two dialogs and run the application, you should now be able to open the application twice.
