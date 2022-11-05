---
title: "Quickly Removing Windows.old"
publishDate: "2013-09-04"
categories: 
  - "general"
---

The other day I was working on a PC and it was low on disk space, on the root of the drive was a Windows.old folder. After backing up the users folder, I started removing the folder due to the Security applied to this folder it can take some time to amend and delete each folder.

After thinking to myself "There Must Be a Better Way" I found the article noted below.  I have noted here for reference.

1\. Click Start, in the search box type without quotes "disk cleanup" and hit enter.

2\. Select the drive / partition which Windows Vista / 7 is installed on. ( See image Below)

[![os_select-1](http://ramblinggeek.co.uk/wp-content/uploads/2013/09/os_select-1.png)](http://ramblinggeek.co.uk/2013/09/quickly-removing-windows-old/os_select-1/)

3\. It will quickly scan your computer. Then it will display a window like the one below. You need to click "Clean up system files". If prompted by UAC, then click on Yes. (See image below)

[![clean_up](http://ramblinggeek.co.uk/wp-content/uploads/2013/09/clean_up.png)](http://ramblinggeek.co.uk/2013/09/quickly-removing-windows-old/clean_up/)

4\. It will again ask you to select the OS and scan your computer. (See image below)

[![os_select](http://ramblinggeek.co.uk/wp-content/uploads/2013/09/os_select.png)](http://ramblinggeek.co.uk/2013/09/quickly-removing-windows-old/os_select/)

5\. Make sure "Previous windows installations" is ticked and click Ok. (See image below)

[![prev_win_inst](http://ramblinggeek.co.uk/wp-content/uploads/2013/09/prev_win_inst.png)](http://ramblinggeek.co.uk/2013/09/quickly-removing-windows-old/prev_win_inst/)

6\. Click delete files. (See image below)

[![del_files](http://ramblinggeek.co.uk/wp-content/uploads/2013/09/del_files.png)](http://ramblinggeek.co.uk/2013/09/quickly-removing-windows-old/del_files/)

7\. Windows.old should now be deleted.

Sometimes the contents of Windows.old will be gone, but the folder and some subfolders is still there and undeleteable, because it "Cannot be found". If this is the case, try the following...

1\. Click Start, in the search box type in without quotes "cmd" and hit enter.

2\. Type in....

\[code language="plain text"\] rd /s /q c:windows.old \[/code\]

and hit enter.

3\. The directory should now be gone.

Hope this has helped! :-)

**SOURCE:** [HowToGeek Forum](http://www.howtogeek.com/forum/topic/how-to-delete-the-windowsold-folder)