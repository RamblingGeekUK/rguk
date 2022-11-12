---
title: "Exchange ActiveSync Error"
publishDate: "2009-11-23"
categories: 
  - "general"
---

A customers Windows Mobile Phone stopped syncing e-mails, etc, looking at the server we could see this error within the logs.

_Event Type:      Error  
Event Source:    Server ActiveSync  
Event Category: None  
Event ID:           3005  
  
Description:  
Unexpected Exchange mailbox Server error: Server: \[servername.domain.local\] User: \[user’s e-mail address\] https status code: \[400\]. Verify that the Exchange mailbox Server is working correctly._

After following the instructions linked to within in the error (that was after getting off the floor because the link actually worked), the problem still wasn’t resolved.

After a little Googling and not getting very far.  I noticed on another server that worked you could get to [https://server/exchange/owa](https://server/exchange/owa) both internally and externally but only externally on the server that wasn’t working and the error code I received was a https:400, which is the same code mentioned in the description.

This is a SBS 2003 box, so I ran the firewall wizard and after that I could get to [https://server/exchange/owa](https://server/exchange/owa) internally as well as internally and the Windows Mobile Phone started syncing again. Problem resolved. :-)
