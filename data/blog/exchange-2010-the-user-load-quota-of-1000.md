---
title: "Exchange 2010 :  The user load quota of 1000 ...."
publishDate: "2013-05-22"
categories: 
  - "general"
---

So you open EMC 2010 and you are presented with the following error : -

"The WS-Management service cannot process the request. The user load quota of 1000 requests per 2 seconds has been exceeded. Send future requests at a slower rate or raise the quota for this user. The next request from this user will not be approved for at least 2 milliseconds."

and from power shell you receive something like the following :-

_"The attempt to connect to [http://servername.domain.local/powershell](http://email.domain.local/powershell) using Kerberos authetication failed: Connecting to remote server failed with the following error message: The WS-Management service cannot process the request. The system load quota of 1000 requests per 2 seconds has been exceeded. Send future request at a slower rate or raise the system quota. The next request from this user will not be approve for at least 1522693632 milliseconds. For more information see the about Remote\_Troubleshooting"_

The resolution to this is simple, you can either restart the server or run iisreset from an evaluated command prompt.

Close EMC and reopen and you should be good to go. :-)
