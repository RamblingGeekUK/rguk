---
title: "HOW TO: Use Powershell to obtain PC Serial Number"
publishDate: "2014-10-30"
categories: 
  - "general"
tags: 
  - "powershell"
  - "windows"
---

Open powershell and enter the following :

```plaintext
(get-wmiobject WIN32\_bios).SerialNumber
```

Which will return the system's serial number registered in the BIOS.

🙂 Enjoy.
