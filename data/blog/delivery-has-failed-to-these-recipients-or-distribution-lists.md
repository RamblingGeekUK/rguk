---
title: "Delivery has failed to these recipients or distribution lists"
publishDate: "2010-11-05"
categories: 
  - "general"
tags: 
  - "archived"
---

When customers were trying to e-mail us they were receiving the above error back.

Delivery has failed to these recipients or distribution lists

[alias@domain.com](mailto:alias@domain.com) Your message wasn't delivered because of security policies. Microsoft Exchange will not try to redeliver this message for you. Please provide the following diagnostic text to your system administrator

After a little investigation. We have a mailbox which forwards the e-mail to a distribution group.  On the distribution group, the Require that all senders are authenticated option was checked.  Unchecking this resolved the issue.

[![Deliver has failed](/images/deliver_has_failed.png "deliver has failed")](/images/deliver_has_failed.png)
