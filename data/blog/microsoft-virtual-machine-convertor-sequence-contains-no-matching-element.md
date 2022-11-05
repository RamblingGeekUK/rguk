---
title: "Microsoft Virtual Machine Convertor: Sequence contains no matching element"
publishDate: "2013-01-07"
categories: 
  - "general"
---

When converting a Virtual Machine from VMware to Hyper-V using the Microsoft Virtual Machine utility, the conversation failed.   Looking at the log I notice this line, " \[1\]  Value of 'ErrorMessage' = 'Sequence contains no matching element' ", to solve this issue, unsure you unmounts any ISO's.

Also the converted VHD is bootable, you just need to add the HDD to the Hyper-V Virtual Machine.   :-)
