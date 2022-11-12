---
title: "Printing Cause's Error : 0x0000007a"
publishDate: "2015-06-16"
categories: 
  - "general"
---

When a user prints an error is thrown with the error code : 0x0000007a

The solution is to delete the driver and reinstall.   This won't work if the printer has been deployed via Group Policy.   So if you are trying to fix this issue on a PC that the printers have been deployed by Group Policy, you can try the following.

Stop the Print Spooler.  You can do this via Services or using the command prompt,

```plaintext
NET STOP SPOOLER
```

Then open RegEdit, (Windows Key + R, type regedit)

Browse to the following path, replaing <DRIVERNAME> with the driver that you would like to delete, right click and delete it.

```plaintext
HKEY\_LOCAL\_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Print\\Environments\\ x86 or x64\\Drivers\\Version-3\\DRIVERNAME
```

Start the Print Spooler.  You can do this via Services or using the command prompt,

```plaintext
NET START SPOOLER
```

Open a Command Prompt windows and type:

```plaintext
GPUPDATE /FORCE
```

Log Off and Log back in and run a test print, it should now be resolved.
