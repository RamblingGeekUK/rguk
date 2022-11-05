---
title: "SBS CAL Resets"
publishDate: "2008-07-11"
categories: 
  - "general"
---

This has happened to me on a number of SBS boxes whit low hard drive space, generally on drive C:

SBS resets the cal count to 5!

We have just had a customer call and this has happened to.  Normally we backup the CALS using the built in backup utility within SBS Console.

Found this MS KB [888818](http://support.microsoft.com/?kbid=888818), which isn't really much help.

Te SBS2003 licenses are kept in the licstr.cpa file in the WINDOWSsystem32 folder.

- Microsoft keep an automatic backup of this in autolicstr.cpa.  
- Stop the License Logging Service.
- Rename licstr.cpa to licstr.cpa.old.
- Copy autolicstr.cpa to licstr.cpa. 
- Start License Logging Service
- Open Server Management to confirm that the licenses had been restored.

Then found post on [Knight-Time Ramblings](http://blog.chrisara.com.au/2006/09/small-business-server-2003-dreaded-5.html) which worked!
