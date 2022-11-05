---
title: "DirectAccess"
publishDate: "2014-05-07"
categories: 
  - "general"
---

I've been wanting to play around with Microsoft Direct Access since it was first released with Windows Server 2008.  The issue back then way the requirement for multiply public IP Addresses, which was out of reach for my home broadband connectivity at the the time.

If you haven't come across Direct Access, it's a VPN from client to server, without the VPN Client.  I tend to think off it as VPN over HTTP just like Exchange (Outlook Client) Over HTTP. It allows the user to just work on the company network at all times as long as they have a internet connection.

With the introduction of Windows Server 2012/R2, Microsoft have reduced the requirements of Direct Access to a single public IP Address. Which allows it to be used by SME's, right?  Well kind of, it Direct Access is only supported in Windows 7/8 Enterprise.  Such a dumb move by Microsoft.

We ([YourIT Pro](http://www.youritpro.co.uk/)) rolled out Direct Access (In our office) to take a look how it all works and how well.

We configured it as per the guides and it should of just worked, but it didn't, we couldn't get a connection.  That evening I duplicated our office configuration in my home lab environment and continued the next day, still not getting a connection and after Binging/Googling, I found this update ([http://support.microsoft.com/kb/2929930](http://support.microsoft.com/kb/2929930)) and a reboot later I got a connection from my laptop to my home lab.

Yet the office configuration just wouldn't work, the only thing that was different between the Office configuration and the Lab configuration was the router.  In the Office we were using a Draytek Vigor 2820 in the Lab we were using a DrayTek Vigor 2830.  We switch the router and it all started working. :-)

The only reason I can think why this resolved the issue is that the DrayTek Vigor 2830 supports IPv6.

Below are the various links that we used troubleshooting and configuration guides.

Troubleshooting tool : - [http://directaccess.richardhicks.com/tag/windows-7/](%20http://directaccess.richardhicks.com/tag/windows-7/)

Hotfix We Installed : - [http://support.microsoft.com/kb/2929930](http://support.microsoft.com/kb/2929930)

Installation Guide: - [http://robertsmit.wordpress.com/2012/06/26/directaccess-on-windows-2012/](http://robertsmit.wordpress.com/2012/06/26/directaccess-on-windows-2012/)

Once we got this all working, we were very impressed on how it all works.  Group Policy settings work, file shares appears immediately.

I hope this post helps if your looking to deploy this technology. Feel free to fire any questions that you may have. :-)
