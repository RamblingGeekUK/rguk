---
title: "RAMDisk appearing on Windows 7 boot"
publishDate: "2012-06-07"
categories: 
  - "general"
---

You have just installed Windows 7 from a USB Stick and when the system boots it presents two boot options, one being a RAMDisk and you would like to remove it.

Open a command prompt as Administrator. In the command Windows type:

bcdedit /enum all <Enter>

Look through the list for RAMDisk listed as a device.

Copy the GUID (the long alpha numeric string, for example: {fe54c02d-622g-23e9-9871-2ac00453bb2d})

(To copy: Right click, select Mark and drag the pointer over the identifier you want to copy, right click and it will be copied to the clipboard)

Now, at the command prompt type the following:

bcdedit /delete {**_Paste_** **_Your GUID_**}.   Press Enter.

Now reboot, the RAMDisk should be gone.  If not repeat the above process and remove any others listed.

**NOTE::  This will permanently delete the RAMDisk option.**
