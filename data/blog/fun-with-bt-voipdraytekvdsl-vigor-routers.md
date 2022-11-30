---
title: "Fun with BT VoIP/DrayTek/VDSL Vigor Routers"
publishDate: "2015-02-11"
categories: 
  - "general"
tags: 
  - "bbv"
  - "bt"
  - "draytek"
  - "vdsl"
  - "vigor"
  - "voip"
  - "archived"
---

Recently I was involved in some work for a company that had a BT2Wire router. We wanted/needed to swap this out for a Draytek Vigor, this normally wouldn't be an issue. The issue this time around was that the BT2Wire had a couple of BT VoIP lines enabled and although only one was in use and the other was used for the fax, which isn't ironic at all.

Also the Draytek needed to support VSDL (BT Infinity™, FTTC)... So a quick look at Draytek's website, we required the 2860Vn-plus ([here](https://www.draytek.co.uk/products/business/vigor-2860))

**Issue #1, The Draytek wouldn't logon to BT's network.**

For settings for this, see this video :

<iframe width="640" height="360" src="https://youtube.com/embed/n7-zYcSVHF4" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

**Issue #2, Configuring VoIP**

This is were things get a bit funky.

Visit the [www.bt.com/bbv](https://www.bt.com/bbv), enter your account details and on the next page click the "Configure Hub/Router" link which will load a page with a red "Configure" button on it. Right click that button and select "Open in a new window", the SIP account information sent to the Hub will be displayed in the web address bar (where you normally type in www.), highlight and copy the string into an application such as Notepad.  It will show as a single block of text so it will help to put a new line before each & sign for clarity.

It will look like this:

```
[https://www.api.home/voipsetup.api?SIPTr ... otocol=UDP](https://www.api.home/voipsetup.api?SIPTransportProtocol=UDP) &SIPTransportPort=5060 &SIPRegistrarAddress=sip.bbvservice.nat.bt.com &SIPRegistrarPort=5060 &SIPOutboundProxyAddress=www.bbvservice-560049x.bt.com &SIPOutboundProxyPort=5060 &SIPProxyAddress=sip.bbvservice.nat.bt.com &SIPProxyPort=5060 &SIPPhoneNumber1=05600\*\*\*\*\*\* &SIPCallerName1= &SIPUsername1=05600\*\*\*\*\*\* &SIPPassword1=ABCDEFGH12IJK3L &SIPPhoneNumber2= &SIPCallerName2= &SIPUsername2= &SIPPassword2= &SIPHashB=d171f7f6123fbce2e80446dc1b06a8fa &SIPHashC=3f8b49b05078a0c0a5cd3d5c82c33f7a &SIPHashD=777a74c8a8bb129636e6c3cbfae8a811 &SIPHash=4c8d061c965d073308634b261532a180
```

You can take this information and enter into the Draytek.

[![BBV settings](/images/BBV-settings.jpg)](https://www.ramblinggeek.co.uk/wp-content/uploads/2015/02/BBV-settings.jpg)
