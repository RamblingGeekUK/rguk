---
title: "RemoteApp: Copy and Paste not working"
publishDate: "2012-08-02"
categories: 
  - "general"
---

Check the following local policy of the PC, is set to **Not Configured**.

_Computer Configuration Administrative Templates Windows Components Remote Desktop Services Remote Desktop Session Hosts Device and Resource Redirection **Do not allow clipboard redirection.**_

**_1\. Start Run > MMC_**

**_2\. File Add/Remote Snap-in_**

**_3\. Select “Group Policy Object Editor”_**

**_4\. Click Add, Finish and OK._**

**_5\. Navigate to the above path, double click to change to “Not Configured”.  Your Done! :-)_**

 [![image](https://ramblinggeek.co.uk/wp-content/uploads/2012/08/image_thumb.png "image")](https://ramblinggeek.co.uk/wp-content/uploads/2012/08/image.png)
