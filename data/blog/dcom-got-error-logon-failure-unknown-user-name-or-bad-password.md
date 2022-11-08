---
title: "DCOM got error 'Logon failure: unknown user name or bad password.'"
publishDate: "2010-05-06"
categories: 
  - "general"
---

I was getting a lot of these errors in the system event log on one of the servers we maintain.

[![image](/images/dcom2.png "image")](/images/dcom2.png)

This thread put me on the right track to resolving the problem, [http://www.daniweb.com/forums/thread39730.html](http://www.daniweb.com/forums/thread39730.html)

1. Go to Start > Programs > Administrative Tools > Component Services  

2. Expand the Component Services > Computers > My Computer > DCOM Config (I received an error at this point, I clicked no)

3. I then change the view to details which displayed the Application ID. I went thru until I found the application id that matched that in the event viewer.

[![image](/images/dcom1.png "image")](/images/dcom1.png)

4. Click on the Identity Tab. On that tab, there is a "This **user**:" radio button which contains the username and password that my Component is using. Simply change the **user** login information, you may have to restart the machine.

Hope it helps :-)

UPDATE: Corrected a few typo’s. 🙂
