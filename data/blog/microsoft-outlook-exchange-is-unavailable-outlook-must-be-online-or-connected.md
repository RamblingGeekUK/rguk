---
title: "Microsoft Outlook - Exchange Is Unavailable, Outlook Must Be Online Or Connected."
publishDate: "2016-01-11"
categories: 
  - "general"
coverImage: "Capture1-redone.jpg"
---

So Outlook was crashing for a users PC (Windows 10/Outlook 2013).  The cause of the crash was a buggy Add-In.  Outlook wouldn't then login, the username/password dialog kept prompting.

So after checking

autodiscover doing IPCONFIG /flushdns Cached Credentials Hacking the registry

Nothing working.... We checked IE and there was a proxy, once the proxy was removed everything starting working, including Windows Update and Microsoft Offline files!
