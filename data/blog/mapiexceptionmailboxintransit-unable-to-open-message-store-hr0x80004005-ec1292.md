---
title: "MapiExceptionMailboxInTransit"
publishDate: "2015-03-06"
categories: 
  - "general"
---

I was receiving this error:-

"MapiExceptionMailboxInTransit: Unable to open message store. (hr=0x80004005, ec=1292)"

After much Googling and after reading various posts. It turned out that I had made the stupid error of not having the server in the correct subnet and the Exchange 2013 server was trying to get to the existing 2010 server via the firewall.  :-(

Thought I would post this for any other poor sole trying to fix this for an hour.
