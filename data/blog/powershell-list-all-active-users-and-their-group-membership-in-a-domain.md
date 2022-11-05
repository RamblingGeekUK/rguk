---
title: "PowerShell : List all active users and their group membership in a domain"
publishDate: "2013-10-17"
categories: 
  - "general"
---

So you need to know which users are members of which group... this little PowerShell Script will do the job.

- Open Notepad and paste the code in below. Save it with the file extension ps1.
- Open PowerShell with administrator rights.
- Run the following command the allow unsigned scripts to run locally.

Set-ExecutionPolicy RemoteSigned

Full Documentation [here](http://technet.microsoft.com/en-us/library/ee176949.aspx).

Now run the file that you created above, ensure you have a folder on the root of the C: drive called tmp or change the script to your own folder.

It will spit out an CSV file which can be opened in Excel.

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
New-Object PSObject -Property @{
Name = $UN.Name
Group = $Group
}
}
}
$Users | Export-CSV C:tmpUserMemberships.csv
