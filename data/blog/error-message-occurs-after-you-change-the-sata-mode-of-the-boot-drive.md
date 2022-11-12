---
title: "Error Message occurs after you change the SATA Mode of the boot drive"
publishDate: "2014-12-10"
categories: 
  - "general"
tags: 
  - "hardware"
  - "windows"
---

So here's the situation, PC dies you remove the hard drive and put it in a new PC. It boots and you receive a BSOD error 0x0000007B.  If you do the following : -

1. Exit all Windows-based programs.
2. Click **Start**, type regedit in the **Start Search** box, and then press ENTER.
3. If you receive the **User Account Control** dialog box, click **Continue**.
4. Locate and then click one of the following registry subkeys:
    
    HKEY\_LOCAL\_MACHINE\\System\\CurrentControlSet\\Services\\Msahci
    
    HKEY\_LOCAL\_MACHINE\\System\\CurrentControlSet\\Services\\IastorV
    
5. In the pane on the right side, right-click **Start** in the **Name** column, and then click **Modify**.
6. In the **Value data** box, type 0, and then click **OK**.
7. On the **File** menu, click **Exit** to close Registry Editor.

It may well boot, this worked for us.  The above is pulled from MS KB Article 922976, https://support.microsoft.com/kb/922976
