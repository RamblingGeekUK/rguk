---
title: "Excel 2010: Excel HyperLinks to images open in Internet Explorer Rather than Default App."
publishDate: "2016-10-02"
categories: 
  - "general"
---

This issue can be annoying, it requires the registry to fix, all the normal rules apply when editing the registry.

1. Run  regedit.exe
2. Navigate to HKEY\_CLASSES\_ROOT -> jpegfile -> CLSID
3. Right-click on “Default” (the Value Name) and select “Modify”
4. Change “Value data” from {25336920-03F9-11cf-8FD0-00AA00686F13} to {FFE2A43C-56B9-4bf5-9A79-CC6D4285608A}
