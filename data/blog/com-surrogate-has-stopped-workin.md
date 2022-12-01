---
title: "COM Surrogate has stopped working"
publishDate: "2013-05-01"
categories: 
  - "general"
tags: 
  - "archived"
---

I had an issue the other day when a user couldn't open an image attachment within an email, when they tried to open the email, they would receive the following error:

[![com-surrogate-has-stopped-working](/images/com-surrogate-has-stopped-working.png)](/images/com-surrogate-has-stopped-working/)

After Googling the error and finding solutions regarding Nero and Video Codecs, which didn't seem correct to me, so after doing some further digging, the issue was with the Windows Photo Viewer, I then found this [article](https://blog.nolar.info/com-surrogate-has-stopped-working-in-windows-photo-viewer/) which resolved the issue.

The resolution is to replace the Windows Photo View Files, with a working set.

1. Copy "C:\\Program Files\\Windows Photo Viewer" from a working or healthy PC, via USB, Network or you can download it from [here](https://sdrv.ms/17uSSOM).

2. Open your “C:\\Program Files”.

3. Rename “Windows Photo Viewer” to "Windows Photo Viewer.Broken"

4. Copy the healthy “Windows Photo Viewer” folder from step 1  into “C:\\Program Files”, so there will be “C:\\Program FilesWindows Photo Viewer” folder with the usual files.

5. Open your image and check that everything works.

6. Reboot.

7. Delete “Windows Photo Viewer.Broken” folder.
