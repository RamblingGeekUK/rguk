---
title: "How To resolve a sub domain internally with SBS 2003"
publishDate: "2010-07-04"
categories: 
  - "general"
---

If you have created a A record called remote (for example) on your _domain_ name to make it easier for users to access RWW (remote web workplace) from home, you will notice of course that this doesn’t work internally.  This can cause issues with Exchange Active Sync devices that you may have configured to connect to the the server using _remote.domain.com_ and this works great when external from the internal network.  It doesn’t work when the device is within the network the and connected via Wi-Fi. 

Also this can become difficult when configuring OWA (Outlook Anywhere) for Outlook.  As the domain and the certificate has to match you can’t install the certificate because the domain doesn’t match internally if your using [http://servername/](http://servername/).  This resolves that issue and keeps things generally orderly.

Oh, this video actually features me.  ![Smile](http://ramberlinggeek.co.uk/wp-content/uploads/2010/07/wlEmoticonsmile1.png) Sorry about the erms and pauses.   Hopeful the more of these I do the better I will get. 

**DISCLAIMER:  Please use this advice at your own risk.  I have tested it in the lab (read virtual machines) and in production environments and I’ve had no issues.  Be careful.**
