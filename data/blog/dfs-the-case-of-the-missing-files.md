---
title: "DFS : The Case Of The Missing Files"
publishDate: "2017-07-23"
categories: 
  - "general"
tags: 
  - "archived"
---

I've not used DFS all that much myself.   I've configured it a couple of times in a Lab Environment and it just worked, of course, we all know things are different in the real world.

So I recently configured DFS across two servers Server-01 names changed to protect the identity of the innocent servers :-)\] , Server-01 had approx. 300GB files to replicate across 3 shared folders. Server-02, the new server, is empty of course.

DFS Namespace was already installed, I added Replication on Server-01, so Server-02 was installed and configured as normal and replication started a few minutes after, awesome, so left it replicating overnight and the following morning I checked.  That's odd checked the file count between the servers there was a difference in the number of files returned.

So I started investigating what was going on, at first I thought no replicating was happening at all, so I looked at the diagnostic report which suggested the staging area (a cache), was too small, I increased the size of it, at this point, I wasn't sure what I should change it to, the diagnostic report just reported it was too small, so I doubled it, from the default, 4096 to 8192 nothing happening to the file count. What was hopeful about this was if it was too small replication could stop, sounded like my issue.

When I found the dialogue to change the staging size, there was a link on that dialogue which explained staging and what was required to set the right size, you have to take the top 32 largest files and total them up and this is the figure that your staging should be set to, it only uses it if it required to and if it gets within predefined thresholds, the oldest files will be removed from the staging area.   The article provides a PowerShell script to total up the staging size:

```powershell
(Get-ChildItem -recurse –force | Sort-Object length -descending | select-object -first 32 | measure-object -property length -sum).sum /1GB
```

More information regarding this can be found here: [https://technet.microsoft.com/library/dn465158.aspx](https://technet.microsoft.com/library/dn465158.aspx)](https://technet.microsoft.com/library/dn465158.aspx)

After waiting a while and checking, no new files appeared. :-(  However the staging error in the diagnostic report had gone, so I guess that was positive. I still had missing files, and things weren't making much sense at this point, so I created a few test file on Server-01 and watched Server-02 to see if they appeared and they did, which meant replication was working, just not for all files.

So some files for whatever reason weren't replicating, it turns out that DFS won't replicate files that have been marked as Temporary, you have to check the properties of the file to see if the file has been marked as temporary and if you want that file to sync then you need to change its properties from "Temporary" to "Normal" and it will replicate. (More information about this can be found here, [https://blogs.technet.microsoft.com/askds/2008/11/11/dfsr-does-not-replicate-temporary-files/](https://blogs.technet.microsoft.com/askds/2008/11/11/dfsr-does-not-replicate-temporary-files/)), I did this on a couple of test files and they replicated, so I ran it across the whole folder and this increased my replication count. Progress, but I still had missing files. :-(

Comparing folders and started to notice files with extensions, "tmp", "bak" and starting with tidal ("~").  This got me thinking, so if DFS doesn't replicate files that are marked Temporary then files that use things, like "tmp", "bak" and "~" may also be considered temporary files.   I wanted to prove this to myself, so I fired up two VMs and configured DFS and ran some tests.

So now it was just a case of checking how many of these files had the "bak", "tmp" and "~" extensions and hoping that the total matched the missing number of files.  I did this using PowerShell to find the files and then I did a count on them here's the breakdown.

```powershell
$fileswithbak = Get-ChildItem -Filter "\*.bak" -Recurse
$fileswithbak.count
4483
```

|Server        | Folder  | Files |
|--------------|---------|-------|
|Server-01     |Folder-01|673,791|
|Server-02     |Folder-01|669,049|

**Unaccounted for: 4,742**

|File Type    | Count |
|-------------|-------|
|bak          | 4,483 |
|"~\*"        | 178   |
|"tmp" hidden | 18    |
|"tmp"        | 63    |

Total: 4,742 Remaining files unaccounted for 0

|Server        | Folder  | Files |
|--------------|---------|-------|
|Server-01     |Folder-02|909,084|
|Server-02     |Folder-02|886,697|

**Unaccounted for: 22,387**

|File Type    | Count |
|-------------|-------|
|bak          | 32    |
|"~\*"        | 22,351|
|"tmp" hidden | 0     |
|"tmp"        | 4    |

Total: 22,387 Remaining files unaccounted for 0

Problem solved, it was important to know that these weren't production files not being replicated.
