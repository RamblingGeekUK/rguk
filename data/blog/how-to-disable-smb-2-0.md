---
title: "How to disable SMB 2.0 …"
publishDate: "2012-01-25"
categories: 
  - "general"
---

**For Windows 7**

Open an Windows Command Prompt and enter the following to disable: - 

sc config lanmanworkstation depend= bowser/mrxsmb10/nsi
sc config mrxsmb20 start= disabled

To enabled, enter the following: -

sc config lanmanworkstation depend= bowser/mrxsmb10/mrxsmb20/nsi
sc config mrxsmb20 start= auto

**For Windows Server 2008**

Run "regedit" on Windows Server 2008 based computer.

Expand and locate the sub tree as follows.

HKLMSystemCurrentControlSetServicesLanmanServerParameters

Add a new REG\_DWORD key with the name of "Smb2" (without quotation mark)

Value name: Smb2
Value type: REG\_DWORD
0 = disabled
1 = enabled

Set the value to 0 to disable SMB 2.0, or set it to 1 to re-enable SMB 2.0.

Reboot the server.
