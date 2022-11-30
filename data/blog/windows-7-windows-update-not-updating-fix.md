---
title: "Windows 7 : Windows Update Not Updating. FIX!"
publishDate: "2016-09-29"
categories: 
  - "general"
tags:
  - "archived"  
---

**NB:** This is not my work, I wanted to post here for reference as it seems to work, original post : [https://answers.microsoft.com/en-us/windows/forum/windows\_7-update/windows-7-update-solution/f39a65fa-9d10-42e7-9bc0-7f5096b36d0c?auth=1](https://answers.microsoft.com/en-us/windows/forum/windows_7-update/windows-7-update-solution/f39a65fa-9d10-42e7-9bc0-7f5096b36d0c?auth=1)

* * *

Windows Update has become quite problematic for Windows 7 users.  For the past year or so, we've been working to find a solution that will work for you.  We have found one that works very well indeed for most.  We know for certain this works well for September 2nd Tuesday, known as Patch Tuesday. Which is today, and onwards till October 7th.

_**You want to ensure you get all your Windows Updating done before the next Patch Tuesday, October, 8.** _ From that point onwards, there will be a very significant change in the way Windows Update works.  Some may like it a lot.  Some may dislike it intensely.

We emphasize that for this to work, you must follow exactly as this describes.

There are two main types of Windows 7 installations: **_32 bit or 64 bit_**.  You need to know what is installed in your computer.  Click the Start globe, type system in the box. Choose System information in the list.  The techie shorthand for 32 bit is x86 and for 64 bit is x64

1.   Start Windows Update and change the Setting to **_Never check for updates_**.  Close the Windows Update window.  Some members recommend you return the setting to what ever you used before this operation, after you complete Windows Update. IF you do leave the setting at NEVER, Windows Update will no longer be automatic.  From this point onwards, you are responsible for starting and installing updates.  We recommend you do that a few days following the 2nd Tuesday each month.

2.   Restart your computer.

3.   The process starts by ensuring that there is nothing running that will prevent the update from working properly.  Click on the Start globe and type **_services_** into the text box.  Click on Services in the list that pops up.  In the window that then pops up (its alphabetic), find Windows Update.  **_Right-click_** on it (left-click if your mouse is set for left-handers) and choose **_Stop_**.

4.   You are now going to download and install either one or two updates manually.  In most cases only the first (KB3172605) of these is needed.  If that produces a result that says the update is not appropriate for you computer, you need to first install the 2nd of these (KB3020369), then install the first (KB3172605).  Choose the one that is for your machine -- 32 bit (X86) or 64 bit (X64).

**_KB3172605_**:

32 bit

https://download.microsoft.com/download/C/D/5/CD5DE7B2-E857-4BD4-AA9C-6B30C3E1735A/Windows6.1-KB3172605-x86.msu

64 bit

https://download.microsoft.com/download/5/6/0/560504D4-F91A-4DEB-867F-C713F7821374/Windows6.1-KB3172605-x64.msu

**_KB3020369_**:

32 bit

https://download.microsoft.com/download/C/0/8/C0823F43-BFE9-4147-9B0A-35769CBBE6B0/Windows6.1-KB3020369-x86.msu

64 bit

https://download.microsoft.com/download/5/D/0/5D0821EB-A92D-4CA2-9020-EC41D56B074F/Windows6.1-KB3020369-x64.msu

5.   After restarting your computer, wait about 10 minutes until Windows Update completes its tasks.  Do not use the computer for any other purpose during this wait period.

6.   Start Windows Update.  It will take only a few minutes (unless, of course it has been many months since the last update) to come up with a list and download the updates you select.  The process is quite normal as it always was from this point onward.

If your computer has not been updated for a long time, it may take longer.
