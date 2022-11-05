---
title: "Windows 8: Installing RSAT tools, nothing happens"
publishDate: "2013-01-04"
categories: 
  - "general"
---

I wanted to install the RSAT tools on to my desktop PC to manage my lab servers, which don't have monitors connected.  I downloaded the RSAT tools from [here](http://www.microsoft.com/en-gb/download/details.aspx?id=28972) and ran the installation, nothing actually installed.

So I went back to the KB article and it mentioned about installing the language pack and seemed to imply to install any language and then install the RSAT tools, which I tried and still no joy.

After googling and finding various forums posts that made a lot of assumptions and didn't walk through a complete solution.  So after reading a few I figured out what was required to get the tools to install.

If your having this issue it appears to happen because the UK installation media has been used to install Windows 8 and by default it doesn't install the US language and it's this which stops the tools from installing.

1. Download the ISO "mu\_windows\_8\_language\_pack\_x64\_dvd\_917544.iso" from TechNet or MSDN (2GB) or Download the lp.cab (language pack from [here](https://skydrive.live.com/redir?resid=3DA9CA5E6374C927!2131&authkey=!AOoF0qcuK_4Qbww), 160mb).___NB: I'm assuming you have downloaded the ISO and mounted it, you will need to change the path of where the LP file is located for it to install.  
      
    ___
2. Once you have the ISO mounted, open PowerShell with Administrator Rights and type in the following command:Add-WindowsPackage -PackagePath d:langpacksen-uslp.cab -Online  
      
    
3. When you hit return, the installation of the Language pack will begin, it typical takes a few minutes to install, once completed, see screenshot below, run the RSAT Installer, "Windows6.2-KB2693643-x64", you will note the installation takes a little longer and the tools will appear.  
      
    
4. There is no need to Turn them on via Windows Control Panel, there on by default.

[![RSAT Installation Windows 8 Pro](http://ramblinggeek.co.uk/wp-content/uploads/2013/01/RSAT-Installation-Windows-8-Pro.png)](http://ramblinggeek.co.uk/2013/01/windows-8-installing-rsat-tools-nothing-happens/rsat-installation-windows-8-pro/)

Sorry for the lengthy post, I wanted to try and make this easy as possible as well as explaining what was going on.

UPDATE:  Micheal Halpin has wrote a PowerShell script to check the installed language packs.  Which can be found [here](http://michealhalpin.com/blog/index.php/issues-installing-remote-server-administration-tools-for-windows-8/).
