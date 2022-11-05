---
title: "Resolve ARCserve Job Corruption"
publishDate: "2011-04-28"
categories: 
  - "general"
---

1\. Start > run > cmd {enter}  
2\. cd c:program filescaBrightstor Arcserve Backup {enter}  
3\. cstop {enter}  
4\. Start > Run > %BAB\_HOME% {enter}  
5\. Rename the folder 00000001.qsd to OLD\_00000001.qsd  
6\. Switch back to the command Window  
7\. cstart {enter}

Note this deletes the Pruning Job As Well to recreate that

1\. Start > Programs > CA > Brightstor > Arcserve Backup > Server Admin  
2\. Click the Settings Icon  
3\. On the Database Tab > Tick Submit Prune Job > Add Server name/Password for caroot.  
4\. Set the Prune time above (12:00 is the default on a fresh install)

You will need to create a new backup job with the selections.
