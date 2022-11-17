---
title: "Hyper-V 2012 : \"no active network adapters found\""
publishDate: "2014-07-24"
categories: 
  - "general"
tags:
  - "archived"
---

So your playing... sorry... learning/working with Virtual Machine Manager (VMM) and installing/configuring virtual switches.   Your configuration doesn't take and in the Job's windows from VMM, you see something like the following: -

[![HyperVVMMJobsError](/images/HyperVVMMJobsError.png)](https://ramblinggeek.co.uk/?attachment_id=)

You log onto the physical console of the server and see that the network connection, now reads  "no active network adapters found".

Of course the next step is to Google the error, you most likely found lots of posts informing you how to install drivers, etc.   If like me you also Google for a powershell command to remove the device of device manager, in the hope that when you next restart, it will be re-installed and start working again and come up empty handed.

If only you could access device manager and remove the card as you can when you have access to the GUI.  Well you can access device manager from the command line, but not using powershell command, a good old ".exe" is in order.

The version of DevCon.exe required to function with Windows 8/2012 is located in the Windows Development Kit.  Which can be downloaded [here](https://social.technet.microsoft.com/wiki/contents/articles/182.how-to-obtain-the-current-version-of-device-console-utility-devcon-exe.aspx).

See [here](https://msdn.microsoft.com/en-us/library/windows/hardware/ff544746(v=vs.85).aspx#ddk_example_36_remove_a_particular_network_device_tools) for usage of DevCon.exe.  Useful to know.
