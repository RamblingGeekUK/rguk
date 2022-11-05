---
title: "Error connecting to agent: No such file or directory"
publishDate: "2019-08-14"
categories: 
  - "general"
---

So I was setting up my local desktop PC, Windows 10 (1903) to connect to a Raspberry Pi using the new Microsoft Terminal.

I wanted to be able to click on the tab and have me connect direct into the PI, without typing username and password each time.

Of course the way to do this is with SSH keys. I've done this before without any issues. When I was connecting, I was being prompted each time for the ssh passphrase of the SSH Key. Running ssh-add from the command line on Windows 10 came back with the error

Error connecting to agent: No such file or directory

So as always, the fix is simple once you know how. Check the Windows Service "OpenSSH Authentication Agent" is set to manual and running.

One I did this and she ran ssh-add, I could then connect to the Pi without any prompts.

Happy Hacking. 👍
