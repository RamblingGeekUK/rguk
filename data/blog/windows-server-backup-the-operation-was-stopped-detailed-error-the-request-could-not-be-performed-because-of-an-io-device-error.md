---
title: "Windows Server Backup - the operation was stopped: Detailed error: The request could not be performed because of an I/O device error"
publishDate: "2014-01-28"
categories: 
  - "general"
---

Basically there are two things that could be causing your backup to fail if it is a removable HD.  I am going to save you the trouble of reading [this](http://social.technet.microsoft.com/Forums/en-US/windowsbackup/thread/5d9e2f23-ee70-4d41-8bfc-c9c4068ee4e2) whole thread and catch you up.

Your removable HD has bloatware (crapware, extra software, custom bios, etc etc…) that prevents windows from seeing it for what it should be (a removable HD). When you plugged your disk in did you also get a new CDROM drive also?  Did you install some special software in order to get to the disk?  Encryption software maybe?  Your disk is not going to work.  Stop reading any further and return it.

Don’t feel bad.

Chances are you didn't know it was going to be that way and the manufacturer did a poor job of telling you about it before you purchased it. Return your drive and go to this site where there is a nice list developing that tracks disks that have been tested:  [http://social.technet.microsoft.com/wiki/contents/articles/1780.aspx](http://social.technet.microsoft.com/wiki/contents/articles/1780.aspx)

Your disk has more than 512 bytes per physical sector.  If it new and large (like 1TB or more) it probably has 4096 bytes per physical sector.  The windows backup software was designed to work with disks that have 512 bytes per physical sector.  Again, don’t feel bad about getting the wrong disk.

A quick check of about 10 disks online and couldn't find a single one where the manufacturer listed the bytes per physical sector in the specs anywhere.  Also, until you have this problem, you will probably never know about the 512 byte design issue.

Anyhow, now that you do know about it, you can try to fix it using the Microsoft hotfix here: [http://support.microsoft.com/kb/982018](http://support.microsoft.com/kb/982018) which adds support for 4096 byte disks to server 2008 and 2008 R2 (and any SBS versions based on them).  Once the hotfix is applied and you reboot, try assigning the removable HD a drive letter and formatting it. Once that is done you can check to see if the disk is going to work by using fsutil.  Here is an example showing the command line and the result:

C:\\Users\\administrator>fsutil fsinfo ntfsinfo f:
NTFS Volume Serial Number :       0x2ebc529bbc525d81
Version :                         3.1
Number Sectors :                  0x000000000e8b4eff
Total Clusters :                  0x000000000e8b4eff
Free Clusters  :                  0x000000000e8aa566
Total Reserved :                  0x0000000000000000
Bytes Per Sector  :               4096
Bytes Per Physical Sector :       <Not Supported>
Bytes Per Cluster :               4096
Bytes Per FileRecord Segment    : 4096
Clusters Per FileRecord Segment : 1
Mft Valid Data Length :           0x0000000000100000
Mft Start Lcn  :                  0x00000000000c0000
Mft2 Start Lcn :                  0x0000000000000002
Mft Zone Start :                  0x00000000000c0000
Mft Zone End   :                  0x00000000000cc820
RM Identifier:        42643033-B240-11E0-9765-3C4A92E16BD6

You see where it says “Bytes Per Physical Sector:” and the result was “<Not Supported>” ?  That means this disk will not work with the backup even though the hotfix is installed.  Some disks don’t report their bytes per physical sector correctly and therefore won’t work.   If you get one that does report 512 or 4096 you should be OK.

Btw, if you do find one that works, be kind and add it to the list of drives here: [http://social.technet.microsoft.com/wiki/contents/articles/1780.aspx](http://social.technet.microsoft.com/wiki/contents/articles/1780.aspx) with a comment about your test setup and results.
