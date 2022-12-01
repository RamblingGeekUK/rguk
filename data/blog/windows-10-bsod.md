---
title: "Windows 10: BSOD"
publishDate: "2018-10-12"
categories: 
  - "general"
tags:
  - "archived"
---

A number of PC were BSOD of death latley and with the issues surrounding the latest Windows Build, 1809, we figured that it was to do with that.  It turns out that it's a HP Keyboard driver causing the issue, it appears as :  
  
HP Keyboard Filter Driver for Windows 10 1803 and 1809 (x64)  
  
The solution was found at [Read](https://www.reddit.com/r/Windows10/comments/9n0bkw/one_of_these_quality_updates_can_cause_an/) it. Which is to rename the following file :  

```
ren C:\\Windows\\System32\\drivers\\HpqKbFiltr.sys HpqKbFiltr.sys\_old
```
  
So it appears to be an issue with HP PCs then and not Windows 10 1809.
