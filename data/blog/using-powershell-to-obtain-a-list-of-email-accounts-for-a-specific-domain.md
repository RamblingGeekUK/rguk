---
title: "Using PowerShell to obtain a list of email accounts for a specific domain"
publishDate: "2012-07-16"
categories: 
  - "general"
---

Fairly simply command worked for me: -

Get-Mailbox -resultsize unlimited | Select-Object -expandproperty emailaddresses | Where-Object {
$\_.smtpaddress -ilike "\*domain\*"} | Select-Object SmtpAddress | Export-CSV "c:emaisl.csv"

![Smile](http://ramblinggeek.co.uk/wp-content/uploads/2012/07/wlEmoticon-smile.png)
