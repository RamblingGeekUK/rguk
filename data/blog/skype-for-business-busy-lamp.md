---
title: "Skype (for Business) Busy Lamp"
publishDate: "2018-12-30"
categories: 
  - "general"
tags:
  - "archived"
---

In our office, we use headsets rather than the traditional phone handset. This is for the very practical reason of having both hands free whilst on a call.  However, the downside is other people in the office can't always tell if you're on a call or not.  This problem has already be solved by [BusyLight](https://www.busylight.com/en/).  Rather than buying one of these, I decided to see if I could build one, that's more fun, right?

At this point it may be a good time to make it clear I'm talking about Skype for Business, not Skype consumer client, they are the same in name only, in reality, they are completely different products. Skype for business and the Windows client was previously called Lync and that's what we are really working with.

So there are a number of challenges that we need to come over.

Skype has the concept of presence status, these are Available, Busy, Do Not Disturb, Be Right Back, Off Work, Appear Way. When you answer a call in Skype, the status changes from Available to Busy.  The idea here is to have the LED Strip turn to red when on a call, this would allow others to see that you're on a call.  I guess I could have used a multicoloured single LED with some kind of housing with a reflector the circuit would be simpler but, where's the fun in that?

So we have a number of challenges here, we need to grab the status from Skype then somehow fire this at LED Strip to change the colour. My first thought was complicated, overly so and I felt, without even trying it, it wouldn't work well and would have a delay.   That was to use a RaspberryPi with the LED strip connected to it, then have a REST API running on it, which you could "POST" to it to change the LED Status. This meant that the Pi would have to be on the LAN and it would have to have an IP address, etc.... You see complicated....

The inspiration for this project as previously mentioned is the BusyLight, which connects via USB, so how could I achieve the same?  In step, the Arduino UNO, confession time, I, of course, knew about Arduino but had never actually used one before.  So a little reading up and I found that I can control it via USB, excellent, just what I was looking for, so a couple of clicks later one was on order.

So I had to figure out how I was going to get the presence status from Skype.  I figured Microsoft would have an API and sure enough, the did, then a little frustration kicked, because of the renaming trying to find the correct SDK was beyond silly, skype/Lync really is a mess. 

I ended up installing the software from BusyLight and grabbing the DLL from there install as I couldn't get it from Microsoft, give you have any suggestions then please let me know. Once I had the DLL's I fired up Visual Studio and create a new C# Windows Form Project and added the DLL, then using Microsoft Online Documentation figured out how to obtain the status information and had it printed out to the screen.

With that step figured out it was now just a matter of understanding how Arduino works, very easily as it happened.  If you have never used one before, I thought of it along the following lines, the Audio UNO will sit running its program in a constant loop until it looses power, when power is returned it just starts again. 

So in our case here, we needed it to sit there waiting for input from the USB/Serial to change the Status of the LED's from Available to Busy and Away.  This was achieved by using the serial input on the board via the USB Port, which on the UNO is a USB type B connection type.

Below is the code I used for the Arduino UNO and you can see we can set the colours of the LEDs by changing the value of REDPIN from 0 to 255.

<iframe style="height: 510px; width: 100%; margin: 10px 0;" src="https://create.arduino.cc/editor/RamblingGeek/78af6e89-1bbe-4449-a8af-c507f497ba5b/preview?embed" width="300" height="150" frameborder="0"></iframe>

Next, I set about working out the Circut which wasn't the difficult as there are lots of guides on the web.  See my design below.

![/images/Skype-Busy-Lamp_bb.png](/images/Skype-Busy-Lamp_bb.png)

Links :

https://blog.thoughtstuff.co.uk/2012/09/hacking-the-busylight/ https://learn.adafruit.com/rgb-led-strips/usage https://fritzing.org/home/
