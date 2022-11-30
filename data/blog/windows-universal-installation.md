---
title: "Windows Universal Installation"
publishDate: "2012-06-13"
categories: 
  - "general"
tags:
  - "archived"
---

Since Windows Vista, Windows Installation disk’s have come with all Editions on the disk.  These means if you want to create a single USB bootable drive which will allow you install:-

Windows 7 Starter Windows 7 Home Basic Windows 7 Home Premium Windows 7 Professional Windows 7 Ultimate

Of course you will need a valid Product Key for the version you want to install.

How to get all editions : -

1\. Create an ISO of your DVD.

2\. Mount the DVD using virtual clone drive or something similar.

3\. Copy the all of the files into a folder.

4\. Locate the ef.cfg file located in the sources folder and rename it to ef.cfg.bak

5\. Create a new ISO from this folder, create your USB from the newly created ISO.

When you boot the USB drive you will be able to select which version to install.

_NOTE:  This also works for Windows Server 2008 and Windows Server 2008 R2 Media._
