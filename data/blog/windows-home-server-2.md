---
title: "Windows Home Server"
publishDate: "2009-01-03"
categories: 
  - "general"
---

  
A month or so ago I started to copy a 40mb file to my WHS (HP MediaSmart).  The resulting copy dialog reported that it was going to take 30+ mins to copy. 

At first I thought it was a Windows Vista Issue.  So boot up my XP laptop and copied a file still slow. 

From the PC to Laptop fast. From Laptop to PC fast no more than 30 secs.

Took it all into the office and it all worked, very confused.  Any how I actual changed the case and motherboard because the old case was just too big.

This weekend I’ve run into the same issue.  I noticed on the Windows Home Server that Network Load Balancing was not checked on the network adapter.  Which I checked and fast copying started working again.

Was this wasn’t checked is a bit of a mystery (at some point I’ll checked the default setting of this on a fresh install of WHS).

Since then it happened again, although this time Network Load Balancing stayed checked.

I disabled and enabled and I had fast copying back! :-)

I think the cause of this is my router!  D-Link DSL 2740B.   Every since I’ve had it every now again (before I purchased my home server) Vista (on my desktop) would drop the globe over the network icon (in the tray) and fall to Local Access only.

The only resolution to this was to reset the router which fix the internet issue.  However the down side to this it seems to be causing the slow copying issue with WHS.

I’m going to try an new router and see how things go for a month.   I’ll post my findings.
