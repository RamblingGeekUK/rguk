---
title: "AOL Can't Deliver Mail"
publishDate: "2016-08-11"
categories: 
  - "general"
tags: 
  - "archived"
---

```
#5.2.1 smtp; 521 5.2.1 : AOL will not accept delivery of this message
```

So after checking all of the obvious things, such as if any of the outbound servers were on any RBL (Real Time Block Lists), they weren't. The email wouldn't send but would send from a different server, I then removed the signature from the email and it sent!

I can only assume this was down to the links and images in the signature that AOL took exception to. :-)
