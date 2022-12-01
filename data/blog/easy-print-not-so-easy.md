---
title: "Easy Print, Not So Easy"
publishDate: "2014-02-22"
categories: 
  - "general"
tags:
  - "archived"
---

Microsoft's introduced EasyPrint to easy printing from a Remote Desktop Server (aka Terminal Server), it uses Microsoft's XMAL printer driver.  XMAL is a description of an object in XML, its really cool technology.

The cool thing is that you no longer have to install the printer driver for a remote printer on the Remote Desktop Server (aka Terminal Server), which should make administration easier.

However as ever, it's never that simply and there are a few know issues, which I have tried to compile a list of them below.

- Make sure the client is RDC 7.0
- If Easy Print doesn't work at all, check if the client meets the requirements : RDP client version 6.1 and .NET Framework 3.0 SP1.
- .NET is no longer required on the client if the server runs W2008 R2 and the client runs Windows 7.

These are recommended hot fixes:

[946411](https://support.microsoft.com/?kbid=946411) - FIX: When you print an XPS file on a Windows XP Service Pack 2 or Service Pack 3-based computer, the characters in the XPS file print incorrectly [954744](https://support.microsoft.com/?kbid=954744) - FIX: Some pages are printed in the incorrect orientation when you use Terminal Services Easy Print to print a document that contains both portrait-oriented pages and landscape-oriented pages [954743](https://support.microsoft.com/?kbid=954743) - FIX: After you apply hotfix 954744, printing performance may be significantly slower when you print documents by using Terminal Services Easy Print

and here are some optional one's:

[962930](https://support.microsoft.com/?kbid=962930) - Cannot print from Terminal Services Easy Print on Windows server 2008, access is denied [954399](https://support.microsoft.com/?kbid=954399) - Error message when you try to print by using Terminal Services Easy Print from a client computer that you connect to a Windows Server 2008-based computer: "Tswpfwp.exe has stopped working" [959442](https://support.microsoft.com/?kbid=959442) - The edges of a document are truncated when you try to print the document by using Terminal Services Easy Print from a client computer that is running Windows XP SP3, Windows Vista SP1, or Windows Server 2008 [970603](https://support.microsoft.com/?kbid=970603) - The content of a printout is different when you print a PDF document by using Terminal Services Easy Print in a Terminal Services (TS) session in Windows Vista or Windows Server 2008

#### Misc. problems

[958894](https://support.microsoft.com/?kbid=958894) - The Printer Spooler service may encounter an access violation and crash when the service handles asynchronous notifications from print clients on Windows Server 2008-based or Windows Vista Service Pack 1-based computers [954400](https://support.microsoft.com/?kbid=954400) - The Remote Desktop Connection disconnects when you try to print to a Windows Server 2008-based terminal server [958656](https://support.microsoft.com/?kbid=958656) - Client-side rendering in Windows Server 2008 and in Windows Vista may decrease performance on Windows Server 2008-based terminal servers [960792](https://support.microsoft.com/?kbid=960792) - Error message when a user tries to add a printer in Windows Server 2008 by using a TCP/IP address or a host name: "Access is denied" [973356](https://support.microsoft.com/?kbid=973356) - Error message when you create one or more network printers in a Windows Server 2008-based terminal server session: "Printers cannot be installed" [955560](https://support.microsoft.com/?kbid=955560) - Handle leaks and memory leaks occur on the Printer Spooler service when a Windows Vista SP1-based computer or a Windows Server 2008-based computer installs and uninstalls network printers [979163](https://support.microsoft.com/?kbid=979163) - Many pages are printed when you try to print an Excel worksheet by using a redirected printer if the Terminal Services Easy Print feature is used [980056](https://support.microsoft.com/?kbid=980056) - The client printer may print the documents by using an incorrect paper size if the "Use Remote Desktop Easy Print printer driver first" policy is enabled [2004234](https://support.microsoft.com/?kbid=2004234) - After upgrading a printer driver on any Microsoft Operating system later than Windows XP and Server 2003, the old driver files are still being used

#### Documentation

[Using Remote Desktop Easy Print in Windows 7 and Windows Server 2008 R2](https://blogs.msdn.com/rds/archive/2009/09/28/using-remote-desktop-easy-print-in-windows-7-and-windows-server-2008-r2.aspx) [Printer Driver Isolation in Windows 7 and Server 2008 R2](https://blogs.sepago.de/helge/2009/04/08/printer-driver-isolation-in-windows-7-and-server-2008-r2/) [https://www.fws.net/blog/template\_permalink.asp?id=102](https://www.fws.net/blog/template_permalink.asp?id=102)

Please feel free to contact me if you have anything to add. Hope this helps. :-)
