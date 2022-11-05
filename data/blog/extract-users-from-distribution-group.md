---
title: "Extract Users from Distribution Group"
publishDate: "2012-07-05"
categories: 
  - "general"
---

I needed to extract a fair amount of users from a Distribution Group on a Windows SBS 2003 Server.  As the Server didn’t have PowerShell installed, I used this instead.

> Set objGroup = GetObject \_
> ("LDAP://cn=Group,ou=Distribution Groups,ou=MyBusiness,dc=domain,dc=local")
> objGroup.GetInfo
> 
> arrMemberOf = objGroup.GetEx("member")
> 
> WScript.Echo "Members:"
> For Each strMember in arrMemberOf
> WScript.echo strMember
> Next

.csharpcode, .csharpcode pre { font-size: small; color: black; font-family: consolas, "Courier New", courier, monospace; background-color: #ffffff; /\*white-space: pre;\*/ } .csharpcode pre { margin: 0em; } .csharpcode .rem { color: #008000; } .csharpcode .kwrd { color: #0000ff; } .csharpcode .str { color: #006080; } .csharpcode .op { color: #0000c0; } .csharpcode .preproc { color: #cc6633; } .csharpcode .asp { background-color: #ffff00; } .csharpcode .html { color: #800000; } .csharpcode .attr { color: #ff0000; } .csharpcode .alt { background-color: #f4f4f4; width: 100%; margin: 0em; } .csharpcode .lnum { color: #606060; }
