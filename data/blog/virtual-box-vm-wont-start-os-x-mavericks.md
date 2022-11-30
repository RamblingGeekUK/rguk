---
title: "Virtual Box: VM won't start OS X Mavericks"
publishDate: "2014-03-12"
categories: 
  - "general"
tags:
  - "archived"
---

Installed OS X Mavericks and VM Box now doesn't work. I've been getting the following error, failed to load VMMR0.r0 (VERR\_SUPLIB\_OWNER\_NOT\_ROOT).

[![VB_ERR](/images/VB_ERR.jpg)]()

Here's how to solve.

1\. Open Terminal

2\. Type the following : sudo chown root /Applications

3\. VM Should start.

This was happening to me on the latest version of Virtual Box and OS X was fully patched.
