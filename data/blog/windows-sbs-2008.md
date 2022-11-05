---
title: "Windows SBS 2008"
date: "2008-06-30"
categories: 
  - "general"
---

I’ would like to be writing about Windows SBS 2008… but I’m having a hard time getting things up and running.

SBS 2008 is a 64bit OS, because Windows Server 2008 is a 64 bit OS, nothing really surprising about this.

So how do we test new software these days, we tend to use virtual machines.

Microsoft Virtual PC 2007 and Virtual Server 2005 SP1 don’t support x64 installs! They will run on 64 bit OS, such as Vista 64bit, but the CPU is only a virtual 32 bit….. come on Microsoft please fix this!

So I downloaded a trial of VMWare Workstation, it installed OK, no problem…. until I installed SBS 2008 RC0, it requires a min off 2gb ram to install… my system had 3gb… so I ordered 4 x 2gb sticks… £25 each so my PC now has 8GB Ram, great.

Apart from I don’t want to have to keep using trails to play around with SBS 2008 RC0, I just want to be able to play around when I have time too.

So posted on [Channel9](http://channel9.msdn.com/forums/Coffeehouse/412389-Virtual-PCHyper-V/) and 9er,  Hodo,  replied saying I could download VMWare server for free!!

Great, downloaded it this evening and it’s hell….

Problem number 1, had to restart Vista to disable drive signing before VM Server worked….

Problem number 2, VMWare server doesn’t support the use for VMWare’s HDD image it’s to new how annoying, now have to reinstall again.

Problem number 3, after settling for reinstalling, VMWare hung…….

Can’t help feeling that MS and VMWare are “behind” with all this, it shouldn’t be this hard.

I’ve not tried this I assume I could install Windows Server 2008 and with the help of HyperV, get SBS2008 up and running using MS Virtual technologies.

**Update:** I downloaded and installed VMWare Player which is free and allows me to boot the original Workstation VM that I created.

So I’m happy that I can now evaluate, which out the Workstation timing out….

I really do hope MS fixes this is with Virtual PC…….
