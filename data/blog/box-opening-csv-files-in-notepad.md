---
title: "Box Opening CSV files in Notepad"
publishDate: "2018-10-05"
categories: 
  - "general"
---

When using BOX via the Web Interface and the user clicks edit, the CSV files open in notepad.  This happens even when Excel opens CSV file locally.
To resolve this we need to change the CSV file type from text to document. We can do this in the registry.

- Open Registry Editor by going to Start and searching for "regedit"  
      
    
- Navigate to HKEY\_CLASSES\_ROOT > .csv  
      
    
- Make sure .csv is selected and not one of the sub-directories  
      
    
- You should see an entry called PerceivedType which has its value set to "text"  
      
    
- Double-click on PerceivedType and change the value to "document"
