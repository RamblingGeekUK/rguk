---
title: "Windows Server 2012 Missing Disk from Task Manager Performance Tab"
publishDate: "2013-05-08"
categories: 
  - "general"
---

[![taskmgr](http://ramblinggeek.co.uk/wp-content/uploads/2013/05/taskmgr.jpg)](http://ramblinggeek.co.uk/2013/04/windows-server-2012-missing-disk-from-task-manager-performance-tab/taskmgr/)

You may of noticed on Windows Server 2012, when looking at the performance tab in task manager.... that the local disk's are missing.   This is due to performance reasons as stated by Microsoft:-

> The Disk counter has been removed from the Performance tab in Windows Server 2012.  This is because there is significant performance impact to collect Disk metrics on a Server due to the overhead Task Manager may cause in querying each Disk IO for each process/thread on individual disk.  Disk metrics are very useful while troubleshooting performance related issues on the server.  An easier way to check Disk metrics is to use Resource Monitor.

Full article [here](http://blogs.technet.com/b/askperf/archive/2012/10/27/windows-8-windows-server-2012-the-new-task-manager.aspx).

You can enable by opening a command prompt with elevated rights and typing the following command: diskperf -y

Close Task Manager if you have it open and relaunch  you can do this from the command line by typing taskmgr, you will now notice the disk's have appeared.   You can disable again, by typing: diskperf -n.  Which we would recommend as it's the default and only enable for troubleshooting.

I can't take credit for finding this little gem, it was a [colleague](http://www.youritpro.co.uk/) of mine.  :-)
