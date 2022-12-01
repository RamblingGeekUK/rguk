---
title: "RDP ActiveX Control won't install"
publishDate: "2012-01-05"
categories: 
  - "general"
tags:
  - "archived"
---

I have been supporting Windows Small Business Server for many years. One of SBS's best selling points is the Remote Web Place feature, which allows users to log on to an internally hosted website and access their desktop PC or Remote Desktop Server via the webpage.

To allow this to work Microsoft uses an ActiveX control which needs to be installed the first time it's used, this is presented as a yellow bar in IE9 and there seem to be various causes with IE9 looping at the installation point, the bar just keeps reappearing even if the ActiveX control is installed.

This is what worked for me the last time I ran into the above problem

Select "Tools", then "Internet options". Select the "Security" tab. Select "Trusted Sites". Click on the "Sites" button.

Add your remote access website to the list of trusted sites. You can add both https://domainname.com and https://domainname.com
