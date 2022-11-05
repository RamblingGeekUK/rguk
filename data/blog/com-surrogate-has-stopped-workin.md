---
title: "COM Surrogate has stopped working"
publishDate: "2013-05-01"
categories: 
  - "general"
---

I had an issue the other day when a user couldn't open a image attachment within an email, when they tried to open the email, they would receive the following error:

[![com-surrogate-has-stopped-working](http://ramblinggeek.co.uk/wp-content/uploads/2013/04/com-surrogate-has-stopped-working.png)](http://ramblinggeek.co.uk/2013/05/com-surrogate-has-stopped-workin/com-surrogate-has-stopped-working/)

 

After Googling the error and finding solutions regarding Nero and Video Codec's, which didn't seem correct to me, so after doing some further digging, the issue was with the Windows Photo Viewer, I then found this [article](http://blog.nolar.info/com-surrogate-has-stopped-working-in-windows-photo-viewer/)  which resolved the issue.

The resolution is to replace the Windows Photo View Files, with a working set.

1\. Copy "C:Program FilesWindows Photo Viewer" from a working or healthy PC, via USB, Network or you can download from [here](http://sdrv.ms/17uSSOM).

2. Open your “C:Program Files”.

3\. Rename “Windows Photo Viewer” to "Windows Photo Viewer.Broken"

4\. Copy healthy “Windows Photo Viewer” folder from step 1  into “C:Program Files”, so there will be “C:Program FilesWindows Photo Viewer” folder with usual files.

5\. Open your image, check that everything works.

6\. Reboot.

7\. Delete “Windows Photo Viewer.Broken” folder.
