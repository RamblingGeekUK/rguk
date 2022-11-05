---
title: "Spaces – We want Spaces!"
publishDate: "2010-08-31"
categories: 
  - "general"
---

We recently purchase some D-Link DWL 8500 AP and upon configuring them we discovered that these units don’t allow you to enter a Shared key with spaces.

After reading thru the manual, it states that you can!  So we tried this via the command line and it doesn’t work. :-(  We have logged the issue with D-Link Support and are awaiting feedback from them.

This is very disappointing.  Below is a screenshot where it states that you can use a key with spaces.

[![clip_image002](http://ramberlinggeek.co.uk/wp-content/uploads/2010/08/clip_image002_thumb.jpg "clip_image002")](http://ramberlinggeek.co.uk/wp-content/uploads/2010/08/clip_image002.jpg)

UPDATE:  Beta firmware released with spaces.

Here comes the beta code. Please use this as a temporary solution. And please be noticed that there are two sideeffects:

[**ftp://ftp.dlink.co.uk/wireless/dwl-8500ap/upgrade\_1\_1\_1\_2.tar**](ftp://ftp.dlink.co.uk/wireless/dwl-8500ap/upgrade_1_1_1_2.tar)

1\. UI display issue. When you apply password "456 789", Web UI shows "456789". The space will be gone on UI after you apply the password. Client still have to connect to the AP using pw "456 789".

2. Password "all space" are not allowed. (all charactes are " ".). It leads Web UI crushed. When issue occurs, you can change wpa-key via telnet. Web UI will be available after you modify the wpa-key.

Example command: set interface wlan0 wpa-personal-key 12345678.
