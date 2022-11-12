---
title: "Exchange 2010 - Mailbox Sizes"
publishDate: "2013-07-09"
categories: 
  - "general"
tags: 
  - "exchange"
  - "powershell"
---

Use the following to return all mailboxes and their sizes on a specified database, which outputs to CSV

Get Exchange Mailbox Size Powershell  

```powershell
Get-Mailbox -Database "Mailbox Database 2048287781" | sort-object | Select-Object name,alias,servername,ProhibitSendQuota,IssueWarningQuota,MaxReceiveSize,MaxSendSize,DisplayName,Database, PrimarySmtpAddress,ProhibitSendReceiveQuota,@{n="Size(KB)";e = {$MBXstat = Get-MailboxStatistics $\_.name; $MBXstat.totalItemsize}},@{n="Items"; e = {$MBXstat = Get-MailboxStatistics $\_.name ; $MBXstat.itemcount; $MBXstat.storageLimitStatus}} | Export-Csv C:output.csv
```

You can then open the file in Excel to make it more readable.

Enjoy 🙂

* 21/08/2013: Updated to make it more readable.
* 12/11/2022: Updated again to make it even more readable. 🙂
