---
title: "Windows Server 2008 R2 Terminal Server/Remote Desktop Server not displaying in SBS 2003 RWW"
publishDate: "2011-03-23"
categories: 
  - "general"
tags:
  - "archived"
---

A clients Terminal Server/Remote Desktop Server failed.   We installed Windows Server 2008 R2 and configured it as a Remote Desktop Server.  But it didn’t appear in the RWW as a 2003 Terminal server would have normally.  As the image below demonstrates.

[![image](https://ramberlinggeek.co.uk/wp-content/uploads/2011/03/image_thumb3.png "image")](https://ramberlinggeek.co.uk/wp-content/uploads/2011/03/image3.png)

Thanks to Philip Elder, [https://blog.mpecsinc.ca/2008/08/terminal-server-not-showing-up-in.html](https://blog.mpecsinc.ca/2008/08/terminal-server-not-showing-up-in.html "https://blog.mpecsinc.ca/2008/08/terminal-server-not-showing-up-in.html") for the following fix.  Which I have posted here for connivance.

“This one is via the SBSC SBS Newsgroup: After setting up a new Terminal Server on the SBS2K3 network, the "Connect to my Application Server" link is not appearing in RWW.  
Remotely edit the SBS and Terminal Server's registry and look for the keys:

- On SBS:
    - HKLMSoftwareMicrosoftSmallBusinessServerRemoteUserProtal  
        KWLinksAppTS=1 (_wrapped on purpose_)
- On the TS:
    - HKLMSystemCurrentControlSetControlTerminal ServerTSEnabled = 1
    - HKLMSystemCurrentControlSetControlTerminal ServerTSAppCompat = 1

If one or both of the keys are not present, create them with the values indicated. If the value for the key is anything but "1", then edit the key to change that value.  
We need to make sure that the Remote Registry service on the TS box is running, and that the firewall has the appropriate ports open to serve TS or the firewall is off altogether.”

This worked a treat for us.
