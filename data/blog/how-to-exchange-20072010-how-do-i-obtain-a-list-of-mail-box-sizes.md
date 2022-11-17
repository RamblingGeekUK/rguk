---
title: "How to: Exchange 2007/2010 How do I obtain a list of mail box sizes?"
publishDate: "2012-02-09"
categories: 
  - "general"
tags:
  - "archived"
---

Open Exchange management shell and enter the following:

Get-MailboxDatabase "<insert database name>" | Get-MailboxStatistics | Sort totalitemsize -desc | ft displayname, totalitemsize, itemcount
