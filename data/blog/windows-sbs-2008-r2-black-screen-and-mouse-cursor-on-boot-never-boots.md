---
title: "Windows SBS 2011 R2:  Black screen and Mouse Cursor on boot, never boots"
date: "2013-06-05"
categories: 
  - "general"
---

After spending a full day on this, we [(Your IT Pro](http://www.youritpro.co.uk/) and I) finally got it to boot by restoring the registry from a backup which windows keeps.

Boot into Windows Recovery command prompt and do the following:-

1. CD C:\\Windows\\System32\\Config\\RegBack
    
2. MD Backup (MD Is the command to Make a Directory)
    
3. Copy _._ Backup  (copies all files in the folder RegBack to the Backup folder created in step 2)
    
4. Copy _._  .. (copies all files from the RegBack folder to the folder below, Config, overwriting them)
    
5. Reboot
    

Hopefully, this will allow your server to boot.

Updated 17/09/2016 and 14/12/2016:  Updated the instructions for clarity.
