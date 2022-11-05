---
title: "Exchange 365 : MX Records"
publishDate: "2014-02-25"
categories: 
  - "general"
---

We have been running into issues of late with Microsoft's Hosted Exchange (Office 365) Platform and reliable and consistent email delivery.

**MX Record Overview**

This is what I believe to be a typical configuration of a SME email configuration.

We have a domain, lets say, _example.com_.  _example.com_ has two MX records set, with different priorities set.

10 MX mail.example.com         xxx.xxx.xxx.xxx

20 MX smtp.backupemail.com  xxx.xxx.xxx.xxx

So we have a mail server receiving incoming email on xxx.xxx.xxx.xxx and all works OK, then our server/connection fails, sending email servers will try the first MX record and fail and look for the next record, in this case smtp.backupemail.com, email is stored there until our server/connection comes back on line.

**Hosted Exchange**

For some reason the sending server must try the first MX record and it's not responding so the sending server then tries the second MX record and email should be delivered.

The issue we are having is if the second MX record is incorrectly configured then email doesn't deliver. All of this leads to some emails being delivered and some bouncing.

The issue appears to be that the Hosted Exchange Platform doesn't always respond the first time and thus the the second MX record is used.  This shouldn't be happening at all, unless the service is down, the issue is it's happening when the server is running normally according the the Office 365 Exchange Status.

We have spoken to Microsoft Office 385 support twice and both times we have been asked to removed the second MX record, which were able to do in one instance and it did appear to resolve the issue.

**BT**

BT have the MX records configured the as the example above. There mistake is that the server specified in the the second MX record (ibmr.btconnect.com) is configured not to relay.  Thus when Office 365 Hosted Exchange platform doesn't respond, it fails over to a server that's incorrectly configured.

_ibmr.btconnect.com gave this error: Relaying denied_

In this case the failover server is configured not the relay the email, most likely because it doesn't know about the domain.

**Summary**

It appears that the solution from Microsoft is to remove the second MX record, this is more of a work around than a solution.  The issue appears to me that the Hosted Exchange platform needs to resolve the time out issue.
