---
title: "Exchange 2007 SP1 – Can’t send/receive emails"
publishDate: "2010-09-14"
categories: 
  - "general"
---

So your Exchange Server has been running fine for months and all of a sudden it doesn’t want to send or receive external emails.

All else seems OK, the stores are mounted, you can telnet in externally, you can telnet externally.

You could be running into an issue with E2007 once the C: drive get below 3GB\* E2007 will simply stop receiving/sending e-mails.  There’s not warning to this, no errors, noting in the event logs.

So here’s how to confirm this issue, the obvious answer is if you have less than 3GB\* of space on your C: drive free some space, 5GB or more, restart the exchange services and see if mail comes in.  If you want to confirm this is the issue, then you need to the following:-

telnet mail.theirdomain.com 25  
when you get the 220 line, send it this command:  
helo whatever.com  
when it replies, send it this command:  
mail from: joe@whatever.com  
when it replies, send it this command:  
rcpt to: someone@theirdomain.com  
when it replies, send it this command:  
data  
when it replies, send it this command:  
subject: test  
type some more stuff  
whatever you want  
end with enter then period then enter

if during this process you see the following error:

452 4.3.1 Insufficient system resources

That’s your issue… go free up some space and restart the exchange services, Information Store and Mail Submission worked for me.

\* I haven’t been able to confirm at what disk space E2007 will decided to stop sending/receiving mail.  I have observed 3GB or less, but it only starts working with 5GB or more free.
