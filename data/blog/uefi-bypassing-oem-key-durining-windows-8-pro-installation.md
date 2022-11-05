---
title: "UEFI Bypassing OEM Key Durining Windows 8 Pro Installation"
date: "2013-07-23"
categories: 
  - "general"
---

We ([Kanzen Solutions](http://kanzensolutions.co.uk/) and I) ran into an issue with a new laptop the other day.   When trying to install Windows 8  Pro (OEM) onto a laptop which used OEM Activation, the Windows 8 Pro installer pulled the key from the BIOS and once installed was activated as Windows 8 and not Windows 8 Pro.

To get around this issue, you need to create a text file called "PID.TXT" which need to be put into the router of the Sources folder.   To this you will need to created a bootable Windows 8 Pro USB Key, and create the "PID.TXT" onto the key within the Sources folder.

The PID file is formatted like so:

\[PID\]
Value=XXXXX-XXXXX-XXXXX-XXXXX-XXXXX

Where the value is the Product Key for your version of windows you are installing.

UPDATE:  You can extract the PID from the BIOS using a tool, located [here](http://www.sherr.co.uk/retrieve_windows_8_license_key_from_bios).

**SOURCE**: [IT Pro Guru](http://itproguru.com/expert/2013/02/solution-to-uefi-issue-windows-8-or-windows-server-2012-installation-may-fail-with-error-message-the-product-key-entered-does-not-match-any-of-the-windows-images-available-for-installation-enter-a-di/), [Microsoft Technet](http://technet.microsoft.com/en-us/library/hh824952.aspx)
