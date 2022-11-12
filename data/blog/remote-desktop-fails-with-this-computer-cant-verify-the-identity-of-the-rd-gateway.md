---
title: "Remote Desktop fails with \"This computer can't verify the identity of the RD Gateway\""
publishDate: "2016-10-01"
categories: 
  - "general"
---

When connecting to a recently installed Small Business Server 2011 using the Remote Web Access, the following error:

##### "This computer can't verify the identity of the RD Gateway "remote.example.com". It's not safe to connect to servers that can't be identified. Contact your network administrator for assistance."

would appear when trying to connect to a remote server or computer.

_**Note: These steps are best performed with Internet Explorer, as it involves downloading ActiveX controls.**_

1. From a remote computer, go to your server's website. This will usually be "https://remote.example.com". You will see a message saying "There is a problem with this website's security certificate." Click "Continue to this website (not recommended)."
2. Login to Remote Web Access.
3. You will see several options - click on **Public** in the **Shared Folders** group.
4. Open the **Downloads** folder, then click on **Install Certificate Package.zip** to download it.
5. Close all open Internet Explorer windows.
6. On your computer, extract the downloaded zip file.
7. Run **InstallCertificate.exe**. When asked, choose to **Install the certificate on my computer**.
8. You will see the message "The certificate is installed. You can connect your computer to Remote Web Access now." At this point a certificate called _server_\-_DOMAIN_\-CA has been installed in the Trusted Root Certification Authorities for the current user and for the local machine.
9. Open Internet Explorer, and go back to your Remote Web Access site.
10. Attempt to connect to the server or other computer. You should see the following warning:
    
    Tick the **Don't ask me again** box, and click **Yes** to continue.

You should now open up a Remote Desktop Connection to the chosen server / computer.

[Source](https://www.andrewstechnology.co.uk/reference/tips/44-sbs2011-rd-gateway-cant-verify-error.html)
