---
title: "MagicMirror Build"
publishDate: "2018-05-05"
image: "~/assets/images/DellMM.jpg"
categories: 
  - "general"
excerpt: "After seeing various people building MagicMirrors, I wanted to build one for myself.  I did this in June 2017. Why post about it now? Well, I fully intended to post about it back then but then, you know, life.  On a few occasions now I have found myself talking to (boring) people about this project and I ended up looking for pictures to show them, which takes too long, so I figured I should get it all in one place."
---

After seeing various people building MagicMirrors, I wanted to build one for myself.  I did this in June 2017. Why post about it now? Well, I fully intended to post about it back then but then, you know, life.  On a few occasions now I have found myself talking to (boring) people about this project and I ended up looking for pictures to show them, which takes too long, so I figured I should get it all in one place.

The MagicMirror is made up of a few basic components:-

1 x 22" Dell Monitor, purchased from eBay.  
1 x Raspberry PI ( & SD Card)  
1 x Two Way Acrylic Mirror Sheet  
1 x Frame  
1 x PIR

Also, we need the MagicMirror software, I did consider building my own, I was thinking along the lines of a webpage in full screen, but then I came across the awesome open-source project, [https://magicmirror.builders](https://magicmirror.builders)

![1](/images/20170606_212951361_iOS-e1588777999502.jpg)

I didn't have a plan but I figured I should get the MagicMirror software up and running on the RaspberryPi first before spending any money.  This is what I did and to my surprise, I did this quickly, I think it took about an hour and that included installing Raspbian onto the SD card, which takes approx. 20mins.

So this was the result of my first tinkering, I got the software installed and figured out how to rotate the display and hide the mouse cursor, these settings are made in the RaspberryPi config files, you may have to play around with the resolutions settings.  Also note, this isn't the Dell Monitor that was used in the build.

After getting this far so quickly I was motivated to continue.  So I needed a monitor for this project, which I found on eBay.  I purchased a 22" screen as I felt this would make a good size monitor and not too big or small when vertical.

I tried to get a monitor with built-in USB ports, the hope was that I could power the RaspberryPI from one of them, unfortunately, this didn't work as they are data only and have no power, a more modern monitor or if buying a new monitor for this purpose then I would ensure it had powered USB ports as this would mean only one power cable for the unit.  I did consider splitting the power from the Monitor power but decided against it in the end.

So the monitor arrived from the seller and I, of course, powered it on to ensure all was in good working order, which it was then I got to work removing the casing from the monitor.

![](/images/20170614_202142322_iOS-e1588778152350.jpg)
    
![](/images/20170614_202207554_iOS-e1588778131143.jpg)

This was straightforward. I removed the stand and a few screws and the rest of the case unclipped it didn't really matter if it broke as I wasn't intending to ever put this bezel back on again. With that done it was time to attach the Pi with the MagicMirror software and boot it up and see what it looked like, yes I couldn't wait to see what it looked like.

I did a fair amount of Googling and came to the conclusion that Two Way Acrylic was to be used for the Mirror, this is not glass as it's cheaper and provides the same effect, and there are different transparency levels, I asked them to send me samples so I could try and figure out which would work best, so after choosing and ordering the Acrylic, I moved on to building the frame,  conveniently my Dad is a joiner so I asked him to build a case for the screen. I have seen mirrors in IKEA which could be used. You can see that process in the images below.

![](/images/20170616_210827377_iOS-e1588778505877.jpg)
    
![](/images/20170616_205707529_iOS.jpg)
    
![](/images/20170617_145424074_iOS-e1588778459622.jpg)

At this point, the Mirror is almost done.   It's now just a case of getting the IR passive working.   This was a passive IR sensor connected to RaspberyPI via the GPIO pins and a plugin for the MagicMirror software and this enables/disables the display so that the mirror can come on or wake up as somebody walks up to it.

<iframe width="640" height="360" src="https://www.youtube.com/embed/ZCZJvVp3R6c" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

There are a lot of plugins available for the MagicMirror software and more are being added over time, this is something that you could never stop tinkering with for example you could take this to the next level and make it touch screen.

Let me know in the comments if you have any questions or if you would like any more details,  go build your own.
