---
title: "List of Recent Word Documents not showing up in Task Bar or Start Menu."
publishDate: "2013-03-07"
categories: 
  - "general"
---

I was asked if this could be resolved, here's what I discovered.

Check the recent document list within word application. If its fine then there might some corruption in the recent items stored in ‘AutomaticDestinations’ folder.

To resolve and fix the issue, follow these steps:

1.   Browse to the location mentioned : %AppData%MicrosoftWindowsRecentAutomaticDestinations

Note: the folder ‘AutomaticDestinations’ is hidden

2.   Delete all the files whose size is 1MB or more.

Note: If you cannot find any file sized 1MB or more then delete all the files. This will eventually remove the Jump Lists’ recent items for all the applications. The recent items on the Jump Lists will be re-added as the program is been used. If you delete all the files then ensure that the applications are pinned again to the taskbar

Information reproduced from [here](http://answers.microsoft.com/en-us/office/forum/officeversion_other-word/list-of-recent-documents-not-showing-up-in-task/8f63be2f-67b0-463e-995e-8274adefdcbe).
