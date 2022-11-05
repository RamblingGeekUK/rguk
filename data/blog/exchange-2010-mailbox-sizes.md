---
title: "Exchange 2010 - Mailbox Sizes"
publishDate: "2013-07-09"
categories: 
  - "general"
tags: 
  - "exchange"
  - "powershell"
---

Use the following to return all mailboxes and there sizes on a specified database, which outputs to CSV

' Get Exchange Mailbox Sizes ' Powershell ' Get-Mailbox -Database "Mailbox Database 2048287781" | sort-object | Select-Object name,alias,servername,ProhibitSendQuota,IssueWarningQuota,MaxReceiveSize,MaxSendSize,DisplayName,Database, PrimarySmtpAddress,ProhibitSendReceiveQuota,@{n="Size(KB)";e = {$MBXstat = Get-MailboxStatistics $\_.name; $MBXstat.totalItemsize}},@{n="Items"; e = {$MBXstat = Get-MailboxStatistics $\_.name ; $MBXstat.itemcount; $MBXstat.storageLimitStatus}} | Export-Csv C:output.csv ' '

You can then open the file in Excel and edit to make more readable.

Enjoy :-)

21/08/2013: Updated to make more readable.
