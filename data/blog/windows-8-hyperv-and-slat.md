---
title: "Windows 8 HyperV and SLAT"
publishDate: "2012-03-03"
categories: 
  - "general"
tags:
  - "archived"
---

Windows 8 HyperV requires support for SLAT (second level address translation).  Check you BIOS as it can be enabled disabled from within.

Download CoreInfo from the Windows Sysinternals website, [here](https://technet.microsoft.com/en-us/sysinternals/cc835722).

Open a command window with admin rights and type coreinfo –v, if an asterix is displayed next to EPT row then your Intel processor supports SLAT.

 [![CoreInfo SLAT support example](https://ramblinggeek.co.uk/wp-content/uploads/2012/03/CoreInfo-SLAT-support-example_thumb.jpg "CoreInfo SLAT support example")](https://ramblinggeek.co.uk/wp-content/uploads/2012/03/CoreInfo-SLAT-support-example.jpg) 

UPDATED:  [https://ramblinggeek.co.uk/2012/08/slat-revisited/](https://ramblinggeek.co.uk/2012/08/slat-revisited/)
