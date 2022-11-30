---
title: "PowerShell : List all active users and their group membership in a domain"
publishDate: "2013-10-17"
categories: 
  - "general"
excerpt: "Say's it all in the title. I needed a quick way to do this for a client. I figured I would publish it here for future reference and anyone else you may find it useful."
image: "~/assets/images/PowerShell_Core_6.0_icon.png"
tags:
  - "archived"
---

So you need to know which users are members of which group... this little PowerShell Script will do the job.

- Open Notepad and paste the code below. Save it with the file extension ps1.
- Open PowerShell with administrator rights.
- Run the following command the allow unsigned scripts to run locally.

```powershell
Set-ExecutionPolicy RemoteSigned
```

Full Documentation [here](https://technet.microsoft.com/en-us/library/ee176949.aspx).

Now run the file that you created above, and ensure you have a folder on the root of the C: drive called "tmp" or change the script to your folder.

It will spit out a CSV file which can be opened in Excel.

```powershell
Import-Module ActiveDirectory

$Users = ForEach ($U in (Get-ADUser -Filter {Enabled -eq "True"}))
{
    $UN = Get-ADUser $U -Properties MemberOf
    $Groups = ForEach ($Group in ($UN.MemberOf))
      {
          (Get-ADGroup $Group).Name
      }
    $Groups = $Groups | Sort
    ForEach ($Group in $Groups)
      {
          New-Object PSObject -Property @
          {
              Name = $UN.Name
              Group = $Group
          }
      }
}
$Users | Export-CSV C:tmpUserMemberships.csv
```
