---
title: "Solution to the Windows Exception: \"The security database on the server does not have a computer account for this workstation trust relationship\""
publishDate: "2011-04-14"
categories: 
  - "general"
---

I came across this issue today and found this solution. 

Got this error when logging into a machine that I hadn't touched in months:

"the security database on the server does not have a computer account for this workstation trust relationship"

Not exactly sure why, but changing from a FQDN to a short name resolved the issue.

1. Login on to your computer with an account that has Administrator privileges.
2. Change domain from FQDN (in my case Redmond.corp.microsoft.com) to the short name (in my case Redmond)
3. Logout and log back in as the domain user.

[Link](https://blogs.msdn.com/b/jongallant/archive/2008/11/19/solution-to-the-windows-exception-the-security-database-on-the-server-does-not-have-a-computer-account-for-this-workstation-trust-relationship.aspx) to original post.
