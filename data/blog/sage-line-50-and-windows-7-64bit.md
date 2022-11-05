---
title: "Sage Line 50 and Windows 7 64bit"
publishDate: "2010-05-11"
categories: 
  - "general"
---

Ran into an issue with 64 bit windows and Sage Line 50.   We use excel to suck data from sage for our stock, accounts, etc.  All of the spreadsheets that we have rely on the ODBC connector but it wouldn't work, even when we tried to configure it via the 32 ODBC control panel applet.   I had another look at it today and a little Google later I found this [link](http://postgresqldbnews.blogspot.com/2008/03/32-bit-odbc-drivers-in-vista-64.html).

Here's what I got from it.  Browse to the C:Windowssyswow64 folder and run odbcad32.exe, you should now be able to configure the path to your sage data as before.  This basically fixed the issue, seems to me that Microsoft have some more work do to.

I believe that this is only an issue with Windows 7 64 bit.  I have installed Windows 7 (64 bit) clean and then installed Sage on top of the clean Windows 7, then Excel 2010 (it was Excel 2007 when I first had the issue) and it worked first time so if you having issues, a bit drastic but maybe a format reinstall will work.  If you go down the reinstall route ensure that you have a fully tested backup.

UPDATE (16/07/2010):

Put the instructions for the fix on this post, to save a click.

Would you like a video demo?  If so then please leave a comment telling me so, if I receive enough then I, I'll do it.
